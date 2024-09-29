import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "The free plan has limited features to view daily vehicle pricing data.",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: `PRO plan: Advanced data vizualization, revenue and market analysis, plus reelSearch+ChatGPT`,

  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}
