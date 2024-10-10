"use client"

import * as React from "react"
import ArchiveIcon from "@mui/icons-material/Archive"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import InfoIcon from "@mui/icons-material/Info"
import RestoreIcon from "@mui/icons-material/Restore"
import ShareIcon from "@mui/icons-material/Share"
import Avatar from "@mui/material/Avatar"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import List from "@mui/material/List"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Paper from "@mui/material/Paper"

export default function ProductNavigation() {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="Details" icon={<InfoIcon />} />
          <BottomNavigationAction
            label="Comments"
            icon={<ChatOutlinedIcon />}
          />
          <BottomNavigationAction label="Share" icon={<ShareIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
