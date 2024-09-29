import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Community",
}

export default async function CommunityPage() {
  return (
    <section className="container flex flex-col  gap-6 py-4 md:max-w-[64rem] md:py-12 lg:py-12">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <div className="flex flex-col items-center gap-6">
          <b className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-6xl">
            Community
          </b>
        </div>
        <Card className="flex h-96 grow">
          <CardMedia
            component="iframe"
            className="flex grow"
            title="Discord"
            src={`https://discord.com/widget?id=1233945206374535208&theme=dark`}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </Card>
        <Button
          component="a"
          href="https://discord.gg/dEyvZ5vH4M"
          variant="contained"
          color="primary"
        >
          Join reelSearch Discord Community
        </Button>

        {/* <iframe
          src="https://discord.com/widget?id=1185340077669363764&theme=dark"
          width="1000"
          height="500"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe> */}
      </div>
    </section>
  )
}
