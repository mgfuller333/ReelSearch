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

import { drinkItems } from "../items"

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
      <Card className="mx-auto content-end w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
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
        <CardContent className="flex flex-col w-100 p-2">
          <BasicRating />
          <div className="flex flex-row gap-x-4 py-2 items-center w-100">
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
          className="flex flex-row justify-center space-x-4 items-center"
        >
          <IconButton
            className="flex flex-row space-x-3 items-center"
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
            className="flex flex-row space-x-1 items-center"
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
    <div className="flex flex-row-reverse justify-start flex-row bg-white min-h-screen overflow-hidden">
      <TopAppBar client={params.client} />
      <div className="w-full px-4 pt-16 flex flex-col gap-6 p-4 text-black dark:text-white">
        {drinkItems.map((item, index) => (
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
