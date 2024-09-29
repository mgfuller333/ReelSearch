const { createContentlayerPlugin } = require("next-contentlayer")
import("./env.mjs")

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["c4.wallpaperflare.com"],
  },
  // ... any other existing config
}

module.exports = withContentlayer(nextConfig)