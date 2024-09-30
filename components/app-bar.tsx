import * as React from "react"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import CatalogNav from "./catalog-select"

export default function BottomAppBar({ client }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ bottom: "auto", top: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <CatalogNav />
          </IconButton>
          <Box sx={{ flexGrow: 0.5 }} />

          <Typography variant="h5">{client}</Typography>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
