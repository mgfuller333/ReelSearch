import React from "react"
import Link from "next/link"
import DefaultCommentSection from "@/productUI/commentsSection"
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

// Individual RecipeReviewCard component
export default function ProductReviewCard({
  title,
  category,
  subheader,
  tiktokID,
  description,
  avatar,
}) {
  return (
    <Card className="mx-auto w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: "h6" }}
        title={title}
        subheader={"$9.00"}
      />
      <CardMedia className="flex justify-center items-center">
        <TikTokIframe videoId={tiktokID} />
      </CardMedia>
      <CardContent className="py-6 px-4">
        <BasicRating />
        <div className="flex flex-row gap-x-4 py-2 items-center w-100"></div>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
