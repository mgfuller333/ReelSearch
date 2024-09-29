import * as React from "react"
import Link from "next/link"
import Button from "@mui/material/Button"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            reelSearch {new Date().getFullYear()} &copy; All Rights Reserved.
            Invoke Innovations is not affiliated with TikTok or Meta
          </p>
          {/* <Link
            target="_blank"

            className={buttonVariants({ size: "lg" })}
          >
            Privacy Policy
          </Link> */}
          <Button variant="text">Privacy Policy</Button>
          <Button variant="text">Terms of Service</Button>

          <Button variant="text">Feature Update Request</Button>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
