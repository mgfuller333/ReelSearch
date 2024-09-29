import * as React from "react"
import Image from "next/image"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import ExtensionIcon from "@mui/icons-material/Extension"
import MemoryIcon from "@mui/icons-material/Memory"
import MinorCrashIcon from "@mui/icons-material/MinorCrash"
import TroubleshootIcon from "@mui/icons-material/Troubleshoot"
import WarningIcon from "@mui/icons-material/Warning"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Icon from "@mui/material/Icon"
import IconButton from "@mui/material/IconButton"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

interface MediaCardProps {
  picPath: any
  name: string
  title: string
  review: string
}

const TestimonialCard = () => {
  const content = [
    {
      name: "Nnaji Dimiri",
      title: "Houston All-Star",
      review: "Easy way to market to consumers",
      picURL: "/profilePic5.png",
    },
    {
      name: "Abdul Shah",
      title: "Bay Area All-Star",
      review: "Easy way to market to consumers",
      picURL: "/profilePic6.png",
    },
  ]

  const FeatureCard: React.FC<MediaCardProps> = ({
    picPath,
    name,
    title,
    review,
  }) => {
    return (
      <Card className=" h-96 w-auto grow bg-slate-100 !shadow-lg !shadow-blue-500/50 sm:w-full lg:h-80 ">
        <CardMedia
          className=" h-32 pl-1 pt-2"
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Image
            src={picPath}
            alt="testimonial"
            height={100}
            width={100}
            className=" rounded-full text-base lg:text-lg"
          />
          {/* Adjust fontSize as needed */}
        </CardMedia>
        <Box className="align-center flex h-1/2 flex-col">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              className="flex justify-center text-left text-lg lg:text-xl "
            >
              {name}
            </Typography>
            <Typography
              component="div"
              className="mb-1 flex justify-center text-left text-lg text-blue-500/80 lg:text-base "
            >
              {title}
            </Typography>
            <Rating name="read-only" value={5} readOnly className="mt-1" />
            <Typography
              style={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                textOverflow: "ellipsis",
                display: "-webkit-box",
                overflow: "hidden",
                textAlign: "center",
              }}
              variant="body2"
              color="text.secondary"
            >
              {review}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    )
  }

  return (
    <div className="grid h-auto gap-2 justify-self-center px-8 sm:grid-cols-1 sm:gap-4 lg:grid-cols-2 lg:gap-10 ">
      {content.map((item) => (
        <FeatureCard
          picPath={item.picURL}
          name={item.name}
          title={item.title}
          review={item.review}
        />
      ))}
    </div>
  )
}

export default TestimonialCard
