"use client"

import * as React from "react"

import { UserSubscriptionPlan } from "types"
import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  promoCode: string
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean
  }
}

export function PartnerForm({
  promoCode,
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(!isLoading)

    // Get a Stripe session URL.
    const response = await fetch("/api/users/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: promoCode }),
    })

    console.log("response", response)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      })
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json()
    if (session) {
    }
    window.location.href = session.url
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> In Depth Analytics Over
              Time
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <b>Find/List Co Host Fleets</b>
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Powerful Data
              Vizualiation
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              Revenue Comparisons
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> In Depth Car by Car
              Comparison
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />{" "}
              <b>New: reelSearch AI Research Chatbot</b>
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Historic Market Demand
              Analysis
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-4xl font-bold" id="textToStrike">
              {"1st Month Free"}
            </h4>
          </div>
          <button
            type="submit"
            className={cn(buttonVariants(), "initiateCheckoutEventbutton")}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {subscriptionPlan.isPro ? "Manage Subscription" : "Get Started!"}
          </button>
        </div>
      </div>
    </form>
  )
}

export function StartForm({
  promoCode,
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(!isLoading)

    // Get a Stripe session URL.
    const response = await fetch("/api/users/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: promoCode }),
    })

    console.log("response", response)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      })
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json()
    if (session) {
    }
    window.location.href = session.url
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Claim your Free trial of reelSearch Premium
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> In Depth Analytics Over
              Time
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <b>Find/List Co Host Fleets</b>
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Powerful Data
              Vizualiation
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              Revenue Comparisons
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> In Depth Car by Car
              Comparison
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />{" "}
              <b>New: reelSearch AI Research Chatbot</b>
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Historic Market Demand
              Analysis
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-2xl font-bold" id="textToStrike">
              {"Free Trial"}
            </h4>
            <p>{"No Credit Card Required"}</p>
          </div>
          <button
            type="submit"
            className={cn(buttonVariants(), "initiateCheckoutEventbutton")}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {subscriptionPlan.isPro ? "Manage Subscription" : "Get Started!"}
          </button>
        </div>
      </div>
    </form>
  )
}
