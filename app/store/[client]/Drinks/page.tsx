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

// export const metadata = {
//   title: "Promo",
//   description: "Enjoy a Promotional Offer from one of reelSearch's Partners",
// }

// Individual RecipeReviewCard component

// Main component to render multiple RecipeReviewCards
export default function RestaurantCards({
  params,
}: {
  params: { client: string }
}) {
  function ProductCatCard({
    title,
    productID,
    category,
    subheader,
    tiktokID,
    description,
    avatar,
  }) {
    return (
      <Card className="content-end w-full">
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
            <Badge
              badgeContent={1}
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#754f3b", // Dark brown like Hershey's chocolate
                  color: "white", // Text color for contrast
                },
              }}
            >
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
    //this should be a componenet with the input clothing items
    <div className="flex flex-row-reverse justify-start flex-row bg-[#faefe3] min-h-screen overflow-hidden b">
      <TopAppBar client={params.client} />
      <div className="w-full px-4 pt-16 sm:flex sm:flex-col sm:py-4 p-4 text-black md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:py-20 dark:text-white">
        {drinkItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-auto md:w-full mb-4 shadow-xl shadow-yellow-800/50 rounded-md hover:border-[#754f3b] hover:border-2" // Border appears only on hover
          >
            <ProductCatCard
              productID={item.productID}
              title={item.title}
              category={item.category}
              subheader={item.subheader}
              tiktokID={item.url}
              description={item.description}
              avatar={item.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
