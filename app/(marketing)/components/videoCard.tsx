import * as React from "react"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

interface MediaCardProps {
  videoId: string
  title: string
}

const VideoCard: React.FC<MediaCardProps> = ({ videoId, title }) => {
  // const videoId = `Nxc5_YXIPc8`
  return (
    <>
      <Card className=" h-auto w-auto !shadow-lg !shadow-blue-500/50 sm:h-[400px] sm:w-full ">
        <CardContent>
          <p className="max-w-[72rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {title}
          </p>
        </CardContent>
        <CardMedia
          component="iframe"
          className="flex h-full w-full font-heading"
          title="reelSearch Tutorial"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </Card>
    </>
  )
}

export default VideoCard
