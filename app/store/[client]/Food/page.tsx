import * as React from "react"
import Link from "next/link"
import CarouselComponent from "@/productUI/productCarousel"
import BasicRating from "@/productUI/rating"
import TikTokIframe from "@/productUI/tikTokIframe"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
// This will dynamically load ExpandMore only on the client
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import { Badge, Chip } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"

import TopAppBar from "@/components/app-bar"

import { restaurantItems } from "../items"

export const metadata = {
  title: "Promo",
  description: "Enjoy a Promotional Offer from one of reelSearch's Partners",
}

// Individual RecipeReviewCard component

// Main component to render multiple RecipeReviewCards
export default function RestaurantCards({
  params,
}: {
  params: { client: string }
}) {
  function RecipeReviewCard({
    title,
    productID,
    category,
    subheader,
    tiktokID,
    description,
    avatar,
  }) {
    return (
      <Card className="mx-auto w-full content-end md:w-3/4 lg:w-2/3 xl:w-1/2">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={"$9.00"}
        ></CardHeader>
        <CardMedia className="flex flex-col items-center">
          <TikTokIframe videoId={tiktokID} />
          {/* <CarouselComponent /> */}
        </CardMedia>
        <CardContent className="w-100 flex flex-col p-2">
          <BasicRating />
          <div className="w-100 flex flex-row items-center gap-x-4 py-2">
            <Link
              href={`/store/${params.client}/${category}/${productID}`}
              className=""
            >
              <Chip
                size="small"
                variant="outlined"
                color="primary"
                label="Learn More"
              />
            </Link>
          </div>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          className="flex flex-row items-center justify-center space-x-4"
        >
          <IconButton
            className="flex flex-row items-center space-x-3"
            aria-label="comments"
          >
            <Badge badgeContent={1} color="secondary">
              <ChatOutlinedIcon />
            </Badge>
            <Link
              href={`/store/${params.client}/${category}/${productID}/Comments`}
              className="flex items-center"
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {"Comments"}
              </Typography>
            </Link>
          </IconButton>
          <IconButton
            className="flex flex-row items-center space-x-1"
            aria-label="share"
          >
            <Link
              href={`/store/${params.client}/${category}/${productID}/Share`}
              className="flex items-center"
            >
              <ShareIcon />
              {/* Ensure the Typography is aligned properly next to the icon */}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {"Share"}
              </Typography>
            </Link>
          </IconButton>
        </CardActions>
      </Card>
    )
  }

  return (
    <div className="flex min-h-screen flex-row flex-row-reverse justify-start overflow-hidden bg-white">
      <TopAppBar client={params.client} />
      <div className="flex w-full flex-col gap-6 bg-neutral-800 p-4 px-4 pt-16 text-black dark:text-white">
        {restaurantItems.map((item, index) => (
          <RecipeReviewCard
            key={index}
            productID={item.productID}
            title={item.title}
            category={item.category}
            subheader={item.subheader}
            tiktokID={item.url}
            description={item.description}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  )
}
