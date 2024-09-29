/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "story",
}

export default async function StoryPage() {
  return (
    <span className="flex justify-center px-4 py-1.5 text-sm font-medium">
      <Card className="flex flex-col-reverse items-center lg:flex-row ">
        <CardContent>
          <Typography gutterBottom fontSize={20} component="div" align="center">
            The Journey to reelSearch:
          </Typography>
          <Typography
            gutterBottom
            fontSize={16}
            component="div"
            align="center"
            paddingBottom={2}
          >
            Empowering merchancts to Media-Driven Market Dominance
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            In today's competitive e-commerce landscape, many businesses
            struggle to effectively showcase their products and engage customers
            across social media platforms. Despite the potential of social
            commerce, many companies lack the tools to create compelling product
            catalogs that seamlessly integrate with social channels.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            This led our team to ask the pivotal question: "How can we help
            businesses better promote their products on social media?" While
            some social media management tools existed, there remained a void in
            solutions that could truly optimize product catalogs for social
            commerce.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            In October 2023, we set ourselves an ambitious challenge: to create
            and launch an innovative catalog management platform by January 1st
            2024. In just over two months, we developed SocialCatalog, a tool
            designed to enhance how businesses showcase products on social
            media.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            Collaborating with talented developers from around the world, we
            worked around the clock to rapidly build and refine SocialCatalog.
            Our diverse team brought together expertise in e-commerce, social
            media marketing, and software development.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            The development process was dynamic and fast-paced, drawing
            inspiration from agile methodologies used in aerospace engineering.
            We embraced rapid prototyping and testing to continuously improve
            the platform based on user feedback.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            SocialCatalog empowers both small businesses and large brands to
            create visually stunning product catalogs optimized for social
            commerce. It transcends basic listing capabilities, providing
            strategic insights to boost product visibility and engagement across
            social channels.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            paddingBottom={1}
          >
            With SocialCatalog, companies can seamlessly sync their product
            inventory to social media, create shoppable posts, and gain
            actionable analytics - all from one intuitive platform. By bridging
            the gap between product catalogs and social media, we're helping
            businesses thrive in the new era of social commerce.
          </Typography>

          <Typography
            fontSize={18}
            color="text.secondary "
            align="left"
            paddingBottom={1}
            paddingTop={1}
          >
            Welcome to the reelSearch experience
          </Typography>
          <Link
            target="_blank"
            href="https://chromewebstore.google.com/detail/reelSearch-reel-analysis/ccdmcpcbaedfaklppmfdpigmhjdkomhh?hl=en"
            className={cn(
              buttonVariants({ size: "default" }),
              "add-to-chrome-button bg-slate-200 pr-3 hover:bg-slate-300"
            )}
            data-from="story-page"
          >
            <Image
              src="/chrome.svg"
              width={30}
              height={30}
              alt="Chrome Extension"
              className="my-1 mr-3"
            />
            <span className="text-sm text-black ">Get Started</span>
          </Link>
        </CardContent>
        <Image
          className="w-48  lg:h-full lg:w-96"
          alt="Founder & Tesla"
          height="504"
          width="378"
          src="/FoodTikTok.jpg"
        />
      </Card>
    </span>
  )
}
