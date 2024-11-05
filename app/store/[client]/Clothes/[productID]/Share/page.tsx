import React from "react"
import Link from "next/link"
import BottomNav from "@/productUI/bottomNav"
import DefaultCommentSection from "@/productUI/commentsSection"
import ProductReviewCard from "@/productUI/productReviewCard"
import BasicRating from "@/productUI/rating"
import TikTokIframe from "@/productUI/tikTokIframe"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
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
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import TopAppBar from "@/components/app-bar"
import ShareDialog from "@/components/shareDialog"

import { clothingItems } from "../../../items"

// Main component to render multiple RecipeReviewCards
export default function RestaurantCards({
  params,
}: {
  params: { productID: string; client: string }
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#faefe3] text-black dark:text-white">
      <TopAppBar client={params.client} />

      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        {clothingItems
          .filter((menuItem) => menuItem.productID === params.productID)
          .map((item, index) => (
            <ProductReviewCard
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

      <BottomNav
        products={clothingItems}
        productID={params.productID}
        client={params.client}
      />
      <ShareDialog />
    </div>
  )
}
