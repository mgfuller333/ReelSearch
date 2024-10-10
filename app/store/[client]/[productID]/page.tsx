"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import DefaultCommentSection from "@/productUI/commentsSection"
import BasicRating from "@/productUI/rating"
import TikTokIframe from "@/productUI/tikTokIframe"
import { setProductNavState } from "@/store/slices/productNavSlice"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
// This will dynamically load ExpandMore only on the client

import InfoIcon from "@mui/icons-material/Info"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import { Badge, Box, Chip, CssBaseline } from "@mui/material"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import TopAppBar from "@/components/app-bar"

// Individual RecipeReviewCard component
function RecipeReviewCard({ title, subheader, tiktokID, description, avatar }) {
  return (
    <Card className="mx-auto content-end w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        titleTypographyProps={{ className: "text-sm" }}
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
  const [producNav, setProductNav] = useState("Details")
  const ref = React.useRef<HTMLDivElement>(null)

  const restaurantItems = [
    {
      productID: "Shrimp-and-Chorizo-Paella",
      title: "Shrimp and Chorizo Paella",
      subheader: "Updated September 14, 2016",
      url: "6990741863397395717",
      description:
        "This flavorful paella combines juicy shrimp, smoky chorizo, and saffron rice. A one-pan Spanish classic, perfect for sharing with friends.",
      avatar: "R",
    },
    {
      productID: "Spaghetti-Carbonara",
      title: "Spaghetti Carbonara",
      subheader: "Updated October 12, 2020",
      url: "7383911964977728810",
      description:
        "A classic Italian pasta made with spaghetti, creamy egg yolk sauce, Parmesan, and crispy pancetta. A simple yet indulgent dish.",
      avatar: "S",
    },
    {
      productID: "Margherita-Pizza",
      title: "Margherita Pizza",
      subheader: "Updated August 18, 2021",
      url: "7224632218197527854",
      description:
        "A traditional Margherita pizza with fresh tomatoes, mozzarella, and basil. Baked to perfection with a crisp crust and balanced flavors.",
      avatar: "P",
    },
    {
      productID: "Chicken-Tikka-Masala",
      title: "Chicken Tikka Masala",
      subheader: "Updated July 4, 2019",
      url: "7313362485057162502",
      description:
        "Tender chicken pieces in a rich, creamy tomato sauce with a blend of aromatic spices. A beloved fusion of Indian and British flavors.",
      avatar: "C",
    },
    {
      productID: "Sushi-Platter",
      title: "Sushi Platter",
      subheader: "Updated June 26, 2022",
      url: "7122678482835950850",
      description:
        "An elegant assortment of fresh sushi, featuring nigiri, sashimi, and rolls. A delightful mix of flavors and textures for sushi enthusiasts.",
      avatar: "S",
    },
    {
      productID: "Tacos-al-Pastor",
      title: "Tacos al Pastor",
      subheader: "Updated March 15, 2018",
      url: "7178638944937069830",
      description:
        "Marinated pork, slow-cooked and served in soft tortillas, topped with cilantro, onions, and pineapple for a deliciously authentic taco experience.",
      avatar: "T",
    },
    {
      productID: "Beef-Wellington",
      title: "Beef Wellington",
      subheader: "Updated November 11, 2021",
      url: "7351121562461916423",
      description:
        "A tender beef tenderloin wrapped in mushrooms, prosciutto, and puff pastry. Baked golden for a stunning main dish.",
      avatar: "B",
    },
    {
      productID: "Chocolate-Lava-Cake",
      title: "Chocolate Lava Cake",
      subheader: "Updated February 9, 2020",
      url: "7238725926853430570",
      description:
        "A decadent chocolate cake with a molten center that oozes out. Perfect with a scoop of vanilla ice cream or fresh berries.",
      avatar: "L",
    },
  ]

  return (
    <div className="flex flex-row-reverse py-12 justify-start flex-row bg-white min-h-screen overflow-hidden">
      <TopAppBar client={params.client} />
      {producNav == "Details" && (
        <div className="w-full px-4 flex flex-col gap-6 p-4 text-black dark:text-white">
          {restaurantItems
            .filter((menuItem) => menuItem.productID === params.productID)
            .map((item, index) => (
              <RecipeReviewCard
                key={index}
                title={item.title}
                subheader={item.subheader}
                tiktokID={item.url}
                description={item.description}
                avatar={item.avatar}
              />
            ))}
        </div>
      )}
      {producNav == "Comments" && (
        <div className="w-full px-4 flex flex-col gap-6 p-4 text-black dark:text-white">
          <DefaultCommentSection />
        </div>
      )}

      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={producNav}
            onChange={(event, newValue) => {
              setProductNav(newValue)
              console.log("newValue", newValue)
            }}
          >
            <BottomNavigationAction
              label="Details"
              value={"Details"}
              icon={<InfoIcon />}
            />
            <BottomNavigationAction
              label="Comments"
              value={"Comments"}
              icon={<ChatOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Share"
              value="Details"
              icon={<ShareIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  )
}
