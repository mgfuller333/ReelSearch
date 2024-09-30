import * as React from "react"
import Link from "next/link"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
// This will dynamically load ExpandMore only on the client
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"

import BackToTopMenu from "@/components/app-bar"
import BottomAppBar from "@/components/app-bar"
import CatalogFilter from "@/components/catalog-filter"
import CatalogNav from "@/components/catalog-select"
import TikTokVideo from "@/components/tikTokEmbed"
import TikTokIframe from "@/components/tikTokIframe"

export const metadata = {
  title: "Promo",
  description: "Enjoy a Promotional Offer from one of reelSearch's Partners",
}

// Individual RecipeReviewCard component
function RecipeReviewCard({ title, subheader, tiktokID, description, avatar }) {
  return (
    <Card className="mx-auto content-end w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia className="flex flex-col items-center">
        <TikTokIframe videoId={tiktokID} />
      </CardMedia>
      <CardContent className="flex flex-col items-center">
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        className="flex flex-row justify-center items-center"
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comments">
          <ChatOutlinedIcon />
        </IconButton>

        <CardActions>
          <Link href="/">Learn More</Link>
        </CardActions>
      </CardActions>
    </Card>
  )
}

// Main component to render multiple RecipeReviewCards
export default function RestaurantCards({
  params,
}: {
  params: { client: string }
}) {
  const restaurantItems = [
    {
      title: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      url: "6990741863397395717",
      description: "This impressive paella is a perfect party dish...", //
      avatar: "R",
    },
    {
      title: "Spaghetti Carbonara",
      subheader: "October 12, 2020",
      url: "7383911964977728810",
      description: "A classic Italian pasta dish...",
      avatar: "S",
    },
    {
      title: "Margherita Pizza",
      subheader: "August 18, 2021",
      url: "7224632218197527854",
      description: "Simple yet delicious Margherita pizza...", //hi
      avatar: "P",
    },
    {
      title: "Chicken Tikka Masala",
      subheader: "July 4, 2019",
      url: "7313362485057162502",
      description: "A popular dish of marinated chicken pieces...",
      avatar: "C",
    },
    {
      title: "Sushi Platter",
      subheader: "June 26, 2022",
      url: "7122678482835950850",
      description: "An assortment of fresh sushi...",
      avatar: "S",
    },
    {
      title: "Tacos al Pastor",
      subheader: "March 15, 2018",
      url: "7178638944937069830",
      description: "A traditional Mexican dish with marinated pork...",
      avatar: "T",
    },
    {
      title: "Beef Wellington",
      subheader: "November 11, 2021",
      url: "7351121562461916423",
      description: "A show-stopping main course for special occasions...",
      avatar: "B",
    },
    {
      title: "Chocolate Lava Cake",
      subheader: "February 9, 2020",
      url: "7238725926853430570",
      description: "A rich and gooey chocolate dessert...",
      avatar: "L", //helped
    },
  ]

  return (
    <div className="flex flex-row-reverse justify-start flex-row bg-white min-h-screen overflow-hidden">
      <BottomAppBar client={params.client} />
      <div className="w-full px-4 flex flex-col gap-6 p-4 text-black dark:text-white">
        <Typography variant="h4" className="text-center">
          {params.client}
        </Typography>

        {restaurantItems.map((item, index) => (
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
    </div>
  )
}
