import * as React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import CatalogNav from "./catalog-select"

export default function TopAppBar({ client }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ bottom: "auto", top: 0 }}>
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
              <CatalogNav />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {client}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
