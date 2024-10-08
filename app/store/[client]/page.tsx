import * as React from "react"
import Link from "next/link"
import CarouselComponent from "@/productUI/productCarousel"
import TikTokIframe from "@/productUI/tikTokIframe"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
// This will dynamically load ExpandMore only on the client
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import { Chip } from "@mui/material"
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
import NestedChip from "@/components/nestedChip"

export const metadata = {
  title: "Promo",
  description: "Enjoy a Promotional Offer from one of reelSearch's Partners",
}

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
        subheader={subheader}
      />
      <CardMedia className="flex flex-col items-center">
        <TikTokIframe videoId={tiktokID} />
        {/* <CarouselComponent /> */}
      </CardMedia>
      <CardContent className="flex flex-col w-100">
        <div className="flex flex-row gap-x-1 pb-2 items-center w-100">
          <NestedChip title={"Dish 1"} amount={"9"} currencyCode={"USD"} />
          <Link href="/" className="">
            <Chip variant="outlined" color="primary" label="Learn More" />
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
        <IconButton className="space-x-1" aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {"Like"}
          </Typography>
        </IconButton>

        <IconButton className="space-x-1" aria-label="comments">
          <ChatOutlinedIcon />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {"Comments"}
          </Typography>
        </IconButton>
        <IconButton className="space-x-1" aria-label="share">
          <ShareIcon />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {"Share"}
          </Typography>
        </IconButton>
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
      subheader: "Updated September 14, 2016",
      url: "6990741863397395717",
      description:
        "This flavorful paella combines juicy shrimp, smoky chorizo, and saffron rice. A one-pan Spanish classic, perfect for sharing with friends.",
      avatar: "R",
    },
    {
      title: "Spaghetti Carbonara",
      subheader: "Updated October 12, 2020",
      url: "7383911964977728810",
      description:
        "A classic Italian pasta made with spaghetti, creamy egg yolk sauce, Parmesan, and crispy pancetta. A simple yet indulgent dish.",
      avatar: "S",
    },
    {
      title: "Margherita Pizza",
      subheader: "Updated August 18, 2021",
      url: "7224632218197527854",
      description:
        "A traditional Margherita pizza with fresh tomatoes, mozzarella, and basil. Baked to perfection with a crisp crust and balanced flavors.",
      avatar: "P",
    },
    {
      title: "Chicken Tikka Masala",
      subheader: "Updated July 4, 2019",
      url: "7313362485057162502",
      description:
        "Tender chicken pieces in a rich, creamy tomato sauce with a blend of aromatic spices. A beloved fusion of Indian and British flavors.",
      avatar: "C",
    },
    {
      title: "Sushi Platter",
      subheader: "Updated June 26, 2022",
      url: "7122678482835950850",
      description:
        "An elegant assortment of fresh sushi, featuring nigiri, sashimi, and rolls. A delightful mix of flavors and textures for sushi enthusiasts.",
      avatar: "S",
    },
    {
      title: "Tacos al Pastor",
      subheader: "Updated March 15, 2018",
      url: "7178638944937069830",
      description:
        "Marinated pork, slow-cooked and served in soft tortillas, topped with cilantro, onions, and pineapple for a deliciously authentic taco experience.",
      avatar: "T",
    },
    {
      title: "Beef Wellington",
      subheader: "Updated November 11, 2021",
      url: "7351121562461916423",
      description:
        "A tender beef tenderloin wrapped in mushrooms, prosciutto, and puff pastry. Baked golden for a stunning main dish.",
      avatar: "B",
    },
    {
      title: "Chocolate Lava Cake",
      subheader: "Updated February 9, 2020",
      url: "7238725926853430570",
      description:
        "A decadent chocolate cake with a molten center that oozes out. Perfect with a scoop of vanilla ice cream or fresh berries.",
      avatar: "L",
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
