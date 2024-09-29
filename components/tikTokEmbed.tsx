"use client"
import { TikTokEmbed } from 'react-social-media-embed';

export default function TikTokVideo({
    tiktokUrl,
  }) {
    return (
     
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TikTokEmbed url={tiktokUrl} width={325} />
      </div>
       
    )
  }