import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { proPlan } from "@/config/subscriptions"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { absoluteUrl } from "@/lib/utils"

const billingUrl = absoluteUrl("/dashboard/billing")

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 })
    }

    const subscriptionPlan = await getUserSubscriptionPlan(session.user.id)
    console.log("subscriptionPlan", subscriptionPlan)
    console.log("session.user.id", session.user.id)
    // The user is on the pro plan.
    // Create a portal session to manage subscription.
    if (subscriptionPlan.isPro && subscriptionPlan.stripeCustomerId) {
      console.log("26")
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      })

      return new Response(JSON.stringify({ url: stripeSession.url }))
    }

    console.log("36", session.user.id)

    // The user is on the free plan.
    // Create a checkout session to upgrade.
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: session.user.email,
      subscription_data: {
        trial_settings: {
          end_behavior: {
            missing_payment_method: "cancel",
          },
        },
        trial_period_days: 5,
      },

      payment_method_collection: "if_required",
      line_items: [
        {
          price: proPlan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
      },
      client_reference_id: session.user.id,
    })

    return new Response(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.error(error.message)
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  const discountDictionary = {
    MooveTraxFree30: "promo_1PjDbOEMoWxHrnV9gw3vlujP",
    GWatersFree30: "promo_1PjDbOEMoWxHrnV9gw3vlujP",
    WeCarFree30: "promo_1PjUNjEMoWxHrnV9QiCYZgrr",
    start: "start",
  }
  try {
    const promoCodeData = await req.json()
    const promoCode = promoCodeData.data

    console.log("promoCode", promoCode)

    const session = await getServerSession(authOptions)

    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 })
    }

    const subscriptionPlan = await getUserSubscriptionPlan(session.user.id)
    console.log("subscriptionPlan", subscriptionPlan)
    console.log("session.user.id", session.user.id)
    // The user is on the pro plan.
    // Create a portal session to manage subscription.
    if (subscriptionPlan.isPro && subscriptionPlan.stripeCustomerId) {
      console.log("26")
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      })

      return new Response(JSON.stringify({ url: stripeSession.url }))
    }

    console.log("36", session.user.id)

    // The user is on the free plan.
    // Create a checkout session to upgrade.
    if (discountDictionary[promoCode] == "start") {
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        customer_email: session.user.email,
        subscription_data: {
          trial_settings: {
            end_behavior: {
              missing_payment_method: "cancel",
            },
          },
          trial_period_days: 5,
        },

        payment_method_collection: "if_required",
        line_items: [
          {
            price: proPlan.stripePriceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId: session.user.id,
        },
        client_reference_id: session.user.id,
      })
      return new Response(JSON.stringify({ url: stripeSession.url }))
    } else {
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ["card"],
        mode: "subscription",

        billing_address_collection: "auto",
        customer_email: session.user.email,
        subscription_data: {
          trial_settings: {
            end_behavior: {
              missing_payment_method: "cancel",
            },
          },
        },
        payment_method_collection: "if_required",
        discounts: [
          {
            promotion_code: discountDictionary[promoCode], // Apply the promotion code here
          },
        ],
        line_items: [
          {
            price: proPlan.stripePriceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId: session.user.id,
        },
        client_reference_id: session.user.id,
      })
      return new Response(JSON.stringify({ url: stripeSession.url }))
    }
  } catch (error) {
    console.error(error.message)
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}
