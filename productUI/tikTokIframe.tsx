import React from "react"

const TikTokIframe = ({ videoId }) => {
  const src = `https://www.tiktok.com/player/v1/${videoId}`

  return (
    <iframe
      src={src + "?&music_info=0&description=1&controls=1&loop=1&rel=1"}
      width="325"
      height="575"
      frameBorder="0"
      allowFullScreen
      title="TikTok video"
    ></iframe>
  )
}

export default TikTokIframe
