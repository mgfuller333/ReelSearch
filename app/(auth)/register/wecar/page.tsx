import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@mui/material"
import { track } from "@vercel/analytics/server"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { PartnerAuthForm } from "@/components/partner-auth-form"

// export const metadata = {
//   title: "Create an account",
//   description: "Create an account to get started.",
// }

export default async function WeCarRegisterPage() {
  await track("CompleteRegistration")

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="flex w-full items-center justify-center sm:min-h-screen lg:p-2">
        <div className="flex flex-col items-center justify-center lg:block">
          <Card className="bg-slate-100" sx={{ maxWidth: 2000 }}>
            <CardContent>
              <div className="flex justify-center">
                <Image
                  src="/WeCarWeb.png"
                  width={2000}
                  height={2000}
                  className="object-contain"
                  alt="WeCar"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-5 lg:p-2">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              1st Month Free of reelSearch with WeCar
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <PartnerAuthForm promoCode="WeCarFree30" />
          <Image
            src="/reelSearchLogo.png"
            width={500}
            height={500}
            className="mx-auto size-20"
            alt="reelSearch"
          />
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
