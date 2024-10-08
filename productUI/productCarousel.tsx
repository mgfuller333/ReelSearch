"use client"

import React from "react"
import { Box } from "@mui/material"
import Carousel from "react-material-ui-carousel"

const items = [
  {
    type: "iframe",
    url: "https://plus.unsplash.com/premium_photo-1669130744959-53fdf266d621?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { type: "image", src: "https://www.tiktok.com/embed/v2/6990741863397395717" },
  {
    type: "tiktok",
    url: "https://www.tiktok.com/embed/v2/6990741863397395717",
  },
]

const CarouselItem = ({ item }) => {
  if (item.type === "iframe") {
    return <iframe src={item.url} width="100%" height="400" />
  }
  if (item.type === "image") {
    return <iframe src={item.url} width="100%" height="400" />
  }
  if (item.type === "tiktok") {
    return <iframe src={item.url} width="100%" height="400" />
  }
  return null
}

const CarouselComponent = () => (
  <Box sx={{ width: "100%", maxWidth: 600, margin: "auto" }}>
    <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  </Box>
)

export default CarouselComponent
