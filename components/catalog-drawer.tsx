
import * as React from "react"
import Link from 'next/link';
import MailIcon from "@mui/icons-material/Mail"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
export default function CatalogDrawer() {

  const drawerWidth = 100;
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
        
      
       <List>
        {["Starters", "Entrees", "Drinks", "Desserts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href="/store/Nobu" passHref>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    
    </Box>
  )

  return (
    <div>
   
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="flex justify-center py-5">
        <RestaurantMenuIcon/>
        </div>
        {DrawerList}
      </Drawer>
    </div>
  )
}
