import * as React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import CatalogNav from "./catalog-select"

// Assuming CatalogNav is in a file called catalog-select

export default function TopAppBar({ client }: { client: string }) {
  //swap toolbar color
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          bottom: "auto",
          top: 0,
          backgroundColor: "rgba(91, 58, 41, 0.75)", // Hershey's chocolate with 75% opacity
          backdropFilter: "blur(10px)", // Frosted glass effect
          WebkitBackdropFilter: "blur(10px)", // Frosted glass effect for Safari
        }}
        className="bg-[#5B3A29]/70 backdrop-blur-md shadow-md text-white dark:bg-[#4E3225]/70 dark:text-white"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" aria-label="open drawer">
              <CatalogNav client={client} />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#faefe3",
            }}
          >
            {client}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon sx={{ color: "#faefe3" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
