import Image from "next/image"
import Link from "next/link"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Rating from "@mui/material/Rating"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import FeatureCardGroup from "./components/featuresCard"
import StoryCard from "./components/storyCard"
import TestimonialCard from "./components/testimonialCard"
import VideoCard from "./components/videoCard"

export default async function IndexPage() {
  const defaultStyle = {
    backgroundColor: "#79d7fc", // Normal background color
    // Add other styling as needed
  }

  const hoverStyle = {
    backgroundColor: "#79a1fc", // Background color on hover
    // Add other styling as needed
  }
  return (
    <>
      <meta
        name="google-site-verification"
        content="bAT2SbDGdnWhA_6UbkGB3FI2tJav6Knu-hfE9PvN1Uc"
      />
      <section className="space-y-6 pb-8 md:pb-12 md:pt-5 lg:py-12">
        <div className="container flex flex-col items-center gap-4 text-center">
          <div className="flex-col gap-x-40   lg:flex lg:flex-row-reverse">
            <div className="sm:w-full lg:w-3/5 lg:items-start">
              <span className=" px-4 text-sm font-medium sm:w-full lg:w-3/5">
                <VideoCard
                  videoId={`u5l7JqlsvE4`}
                  title={`reelSearch Tutorial`}
                />
              </span>
            </div>
            <div className=" gap-y-10px">
              <h1 className="text-center font-heading text-lg sm:text-lg md:text-3xl lg:text-left lg:text-3xl">
                Promote | Engage | Boost Profit
              </h1>
              <h1 className="mt-3 text-center font-heading text-lg sm:text-lg md:text-3xl lg:text-left lg:text-4xl">
                Go To Social Media Engagment Integration For Commerce.
              </h1>
              <span className="mt-5 flex max-w-[52rem] flex-col items-center gap-2 text-left text-sm leading-normal text-muted-foreground sm:text-base sm:leading-8 lg:flex-row lg:text-lg">
                #1 Social Media Integration for Product Catalogues
                <Rating name="read-only" value={5} readOnly />
              </span>

              <div className="mt-10 flex flex-row items-center justify-center  gap-2 lg:justify-start">
                <Link
                  target="_blank"
                  href="/store/Demo"
                  className={`${cn(
                    buttonVariants({ size: "lg" })
                  )} add-to-chrome-button mr-2 bg-slate-200
                  hover:bg-slate-300
                  `}
                  data-from="marketing-hero"
                >
                  <span className="text-xs text-black md:text-base">
                    Get Started
                  </span>
                </Link>
              </div>
              <span className="mb-5 mt-3 flex max-w-[52rem] items-center justify-center gap-2 text-left leading-normal text-muted-foreground sm:text-base sm:leading-8 lg:mb-20 lg:justify-start lg:text-lg">
                Get Started Now For Free
              </span>

              <p className="mb-2 mt-5 max-w-[52rem] text-center leading-normal text-muted-foreground sm:text-base sm:leading-8 lg:text-left lg:text-xl">
                The reelSearch integration emphasizes:
              </p>

              <ul className="mb-10 list-none justify-center text-center text-base text-muted-foreground lg:mb-40 lg:justify-start lg:text-left lg:text-xl">
                <li key={1} className="flex items-center">
                  <span className="mr-2">
                    <CheckCircleOutlineIcon />
                  </span>{" "}
                  {/* Replace with an icon if preferred */}
                  <span>Social Media Marketing</span>
                </li>
                <li key={2} className="flex items-center">
                  <span className="mr-2">
                    <CheckCircleOutlineIcon />
                  </span>{" "}
                  {/* Replace with an icon if preferred */}
                  <span>Focused Product Feedback</span>
                </li>
                <li key={3} className="flex items-center">
                  <span className="mr-2">
                    <CheckCircleOutlineIcon />
                  </span>{" "}
                  {/* Replace with an icon if preferred */}
                  <span>A Way to Establish Trust With Customers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="flex flex-col font-heading">
            <h1 className="mb-5 font-heading text-3xl sm:text-xl md:text-3xl lg:text-4xl">
              Benefits
            </h1>
            <FeatureCardGroup />
          </div> */}

          <div className="flex flex-row space-x-4">
            {/* <h1 className="mb-5 mt-10 font-heading text-3xl sm:text-xl md:text-3xl lg:text-4xl">
              Trusted By Merchants
            </h1> */}
          </div>
          {/* <span className=" px-4 py-1.5 text-sm font-medium">
            <TestimonialCard />
          </span> */}
        </div>
      </section>
    </>
  )
}
