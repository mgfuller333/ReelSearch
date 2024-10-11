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
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import TopAppBar from "@/components/app-bar"

import { restaurantItems } from "../../../items"

// Individual RecipeReviewCard component

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
        <DefaultCommentSection />
      </div>

      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <Link
              href={`/store/${params.client}/${restaurantItems[0].category}/${params.productID}`}
            >
              <BottomNavigationAction label="Details" icon={<InfoIcon />} />
            </Link>

            <Link
              href={`/store/${params.client}/${restaurantItems[0].category}/${params.productID}/Comments`}
              className=""
            >
              <BottomNavigationAction
                label="Comments"
                icon={<ChatOutlinedIcon />}
              />
            </Link>

            <Link
              href={`/store/${params.client}/${restaurantItems[0].category}/${params.productID}/Share`}
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
