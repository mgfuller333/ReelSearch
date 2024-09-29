import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function StoryCard() {
  return (
    <Card className="bg-slate-100 !shadow-lg !shadow-blue-500/50 ">
      <CardMedia
        component="img"
        alt="cybertruck"
        height="140"
        image="/cybertruck.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          fontSize={20}
          component="div"
          align="left"
          paddingBottom={2}
        >
          The Journey to reelSearch: Empowering reel Hosts to Data-Driven
          Dominance
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          align="left"
          paddingBottom={1}
        >
          As a reel host, me and many others faced the challenges of
          increasingly saturated markets & no personally tailored market
          research tools provided by reel.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="left"
          paddingBottom={1}
        >
          This led me to launch reelSearch, the only tool that integrates
          seamlessly with the reel website, providing in-depth, cost-effective
          data visualization and historical insights.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="left"
          paddingBottom={1}
        >
          Designed for both new and experienced hosts, reelSearch empowers users
          to strategically enhance their listings, turning data into actionable
          insights for success in the reel marketplace.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          align="left"
          paddingBottom={1}
        >
          Join the reelSearch community of reel hosts, dedicated to educating
          and supporting each other. Step into the future of informed hosting.
        </Typography>

        <Typography
          fontSize={18}
          color="text.secondary"
          align="left"
          paddingTop={2}
        >
          Welcome to the reelSearch experience
        </Typography>
      </CardContent>
      <CardActions className="ml-0 flex flex-col items-start gap-1 pb-3 lg:flex-row">
        <Link
          target="_blank"
          href="https://chromewebstore.google.com/detail/reelSearch-reel-analysis/ccdmcpcbaedfaklppmfdpigmhjdkomhh?hl=en"
          className={cn(
            buttonVariants({ size: "default" }),
            "add-to-chrome-button bg-slate-200 hover:bg-slate-300"
          )}
          data-from="marketing-story-card"
        >
          <Image
            src="/chrome.svg"
            width={30}
            height={30}
            alt="Chrome Extension"
            className="my-3"
          />
          <span className="text-sm text-black">Get Started</span>
        </Link>
        <Link
          href="/story"
          className={cn(
            buttonVariants({ size: "default" }),
            "bg-slate-200 hover:bg-slate-300"
          )}
        >
          <span className="text-sm text-black">Learn More</span>
        </Link>

        <Link
          href="/community"
          className={cn(
            buttonVariants({ size: "default" }),
            "bg-slate-200 hover:bg-slate-300"
          )}
        >
          <span className="text-sm text-black">Community</span>
        </Link>
      </CardActions>
    </Card>
  )
}
