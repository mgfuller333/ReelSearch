import React from "react"
import Link from "next/link"
import BottomNav from "@/productUI/bottomNav"
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

import { clothingItems } from "../../../items"

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

      <BottomNav
        products={clothingItems}
        productID={params.productID}
        client={params.client}
      />
    </div>
  )
}
