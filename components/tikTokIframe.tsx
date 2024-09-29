import React from 'react';

const TikTokIframe = ({ videoId }) => {
  const src = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <iframe
      src={src}
      width="325"
      height="575"
      frameBorder="0"
      allowFullScreen
      title="TikTok video"
    ></iframe>
  );
};

export default TikTokIframe;