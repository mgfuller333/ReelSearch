"use client"

import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

const ShareDialog = () => {
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // This is the URL and text you want to share
  const shareUrl = "https://example.com"
  const shareText = "Check out this amazing content!"

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Share this content</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareText}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ShareDialog
