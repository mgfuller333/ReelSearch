import React from "react"
import Link from "next/link"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import InfoIcon from "@mui/icons-material/Info"
import ShareIcon from "@mui/icons-material/Share"
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material"

type BottomNavProps = {
  products: {
    productID: string
    category: string
  }[]
  productID: string
  client: string
}

// Main component to render navigation
export default function BottomNav({
  products,
  productID,
  client,
}: BottomNavProps) {
  const productCategory = products.find(
    (item) => item.productID === productID
  )?.category

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{ backgroundColor: "rgba(91, 58, 41, 0.75)" }}
        >
          <Link href={`/store/${client}/${productCategory}/${productID}`}>
            <BottomNavigationAction
              label="Details"
              icon={<InfoIcon />}
              sx={{ color: "#faefe3" }}
            />
          </Link>

          <Link
            href={`/store/${client}/${productCategory}/${productID}/Comments`}
          >
            <BottomNavigationAction
              label="Comments"
              icon={<ChatOutlinedIcon />}
              sx={{ color: "#faefe3" }}
            />
          </Link>

          <Link href={`/store/${client}/${productCategory}/${productID}/Share`}>
            <BottomNavigationAction
              label="Share"
              icon={<ShareIcon />}
              sx={{ color: "#faefe3" }}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
