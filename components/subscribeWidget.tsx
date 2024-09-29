"use client"

import React, { useState } from "react"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Typography,
} from "@mui/material"

import styles from "../components/ui/MailchimpForm.module.css"

// Adjust the path as necessary

const SubscribeFab = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Fab
        className="!shadow-lg !shadow-blue-500/50"
        color="primary"
        aria-label="subscribe"
        variant="extended"
        onClick={handleClickOpen}
        style={{ position: "fixed", bottom: 80, left: 16 }}
      >
        Recieve Updates
        <MailOutlineIcon sx={{ ml: 1 }} />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div id="mc_embed_signup" className={styles.mc_embed_signup}>
            <form
              action="https://reelSearch.us21.list-manage.com/subscribe/post?u=75f4b3c7bbe43802e18c9cf9f&amp;id=2eddb02c21&amp;f_id=00a3f8e6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Stay Up To Date!</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                <div style={{ display: "none" }}>
                  <input type="hidden" name="tags" value="2982683" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_75f4b3c7bbe43802e18c9cf9f_2eddb02c21"
                    tabIndex={-1}
                    value=""
                  />
                </div>

                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  />
                  <p style={{ margin: "0px auto" }}></p>
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SubscribeFab
