import Image from "next/image"
import Link from "next/link"
import { track } from "@vercel/analytics/server"

import { PartnerAuthForm } from "@/components/partner-auth-form"

// export const metadata = {
//   title: "Create an account",
//   description: "Create an account to get started.",
// }

export default async function MooveTraxRegisterPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-1 lg:px-0">
      <div className="lg:p-2">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="mb-6 flex flex-row gap-1">
              <Image
                src="/MooveTraxLogo.png"
                width={500}
                height={500}
                className="mx-auto h-20 w-60"
                alt="MooveTrax"
              />
              <Image
                src="/reelSearchLogo.png"
                width={500}
                height={500}
                className="mx-auto h-20 w-20"
                alt="reelSearch"
              />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
              1st Month Free of reelSearch with MooveTrax
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <PartnerAuthForm promoCode="MooveTraxFree30" />

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
