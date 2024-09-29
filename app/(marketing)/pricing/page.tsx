import Link from "next/link"

import { proPlan } from "@/config/subscriptions"
import { stripe } from "@/lib/stripe"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import LocalCurrencyPrice from "@/components/currencyConvert"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

const getProPlan = async () => {
  try {
    const stripePriceId = proPlan.stripePriceId
    const stripePrice = await stripe.prices.retrieve(stripePriceId)
    return {
      stripePrice,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function PricingPage() {
  let priceInDollars = 0
  try {
    const plan = await getProPlan()
    if (!plan) {
      return null
    }
    priceInDollars = (plan.stripePrice?.unit_amount || 0) / 100
  } catch (error) {}

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all engagement features{" "}
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the Reel Search
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Engage with customers
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Integrated Marketing
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Rapid Feedback
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Monetize Catalogues
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            {/* <h4 className="text-4xl font-bold" id="textToStrike">
              <LocalCurrencyPrice price={priceInDollars} />
            </h4> */}
            <h6 className="text-2xl font-bold" id="textToStrike">
              Pay as you go
            </h6>
            {/* <h6 className="text-sm font-bold" id="textToStrike">
              Per Month
            </h6> */}
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7"></p>
      </div>
    </section>
  )
}
