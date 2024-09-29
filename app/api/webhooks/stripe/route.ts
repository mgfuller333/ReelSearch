import crypto from "crypto"
import { headers } from "next/headers"
import { track } from "@vercel/analytics/server"
import Stripe from "stripe"

import { env } from "@/env.mjs"
import { db } from "@/lib/db"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  try {
    console.log("event.type", event.type)
    const session = event.data.object as Stripe.Checkout.Session
    console.log("session", session)
    if (event.type === "checkout.session.completed") {
      // Retrieve the subscription details from Stripe.
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      )
      console.log("subscription", subscription)

      // Update the user stripe into in our database.
      // Since this is the initial subscription, we need to update
      // the subscription id and customer id.
      await db.user.update({
        where: {
          id: session?.metadata?.userId,
        },
        data: {
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      })

      const stripePrice = session.amount_total || 1500

      const purchaseData = {
        event_name: "Purchase",
        event_time: Math.floor(new Date().getTime() / 1000),
        action_source: "website",
        event_id: session.id,
        user_data: {
          em: hashData(session.customer_email),
        },
        custom_data: {
          currency: session.currency,
          value: stripePrice / 100,
          content_ids: ["reelSearch"],
          content_type: "product",
        },
      }

      try {
        const response = await fetch(
          `https://graph.facebook.com/v11.0/${env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${env.FACEBOOKCONVTOKEN}`, // Use your Facebook App's access token
            },
            body: JSON.stringify({ data: [purchaseData] }),
          }
        )

        if (!response.ok) {
          const error = await response.json()
          console.error("Error sending event to Facebook:", error)
        }
      } catch (error) {
        console.error("Error sending event to Facebook:", error)
      }
    }

    if (event.type === "invoice.payment_succeeded") {
      // Retrieve the subscription details from Stripe.
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      )
      console.log("subscription", subscription)

      // Update the price id and set the new period end.
      await db.user.update({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      })
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }
}

// Helper function to hash user data
const hashData = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex")
}
