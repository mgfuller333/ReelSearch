import React from "react"
import Link from "next/link"
import DefaultCommentSection from "@/productUI/commentsSection"
import BasicRating from "@/productUI/rating"
import TikTokIframe from "@/productUI/tikTokIframe"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
// This will dynamically load ExpandMore only on the client

import InfoIcon from "@mui/icons-material/Info"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import { Box, CssBaseline } from "@mui/material"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import TopAppBar from "@/components/app-bar"

import { clothingItems } from "../../items"

// Individual RecipeReviewCard component
function RecipeReviewCard({
  title,
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
        titleTypographyProps={{ variant: "h6" }} // Adjusts the title text size
        title={title}
        subheader={"$9.00"}
      ></CardHeader>
      <CardMedia className="flex flex-col items-center">
        <TikTokIframe videoId={tiktokID} />
        {/* <CarouselComponent /> */}
      </CardMedia>
      <CardContent className="flex flex-col w-100">
        <BasicRating />
        <div className="flex flex-row gap-x-4 py-2 items-center w-100"></div>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

// Main component to render multiple RecipeReviewCards
export default function RestaurantCards({
  params,
}: {
  params: { productID: string; client: string }
}) {
  return (
    <div className="flex flex-row-reverse py-12 justify-start flex-row bg-white min-h-screen overflow-hidden">
      <TopAppBar client={params.client} />

      <div className="w-full px-4 flex flex-col gap-6 p-4 text-black dark:text-white">
        {clothingItems
          .filter((menuItem) => menuItem.productID === params.productID)
          .map((item, index) => (
            <RecipeReviewCard
              key={index}
              category={item.category}
              title={item.title}
              subheader={item.subheader}
              tiktokID={item.url}
              description={item.description}
              avatar={item.avatar}
            />
          ))}
      </div>

      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <Link
              href={`/store/${params.client}/${clothingItems[0].category}/${params.productID}`}
            >
              <BottomNavigationAction label="Details" icon={<InfoIcon />} />
            </Link>

            <Link
              href={`/store/${params.client}/${clothingItems[0].category}/${params.productID}/Comments`}
              className=""
            >
              <BottomNavigationAction
                label="Comments"
                icon={<ChatOutlinedIcon />}
              />
            </Link>

            <Link
              href={`/store/${params.client}/${clothingItems[0].category}/${params.productID}/Share`}
              className=""
            >
              <BottomNavigationAction label="Share" icon={<ShareIcon />} />
            </Link>
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  )
}
