"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Chip } from "@mui/material"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"

export default function RatingFav() {
  const [value, setValue] = useState<number | null>(2)
  const [heart, setHeart] = useState<boolean>(false)

  const handleHeartToggle = () => {
    setHeart((prev) => !prev)
  }

  return (
    <div className="flex flex-row mt-2 items-center">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
      <Typography variant="body2" className="px-2">
        5 Reviews
      </Typography>

      <Chip
        className="justify-self-end"
        size="small"
        variant="outlined"
        color="primary"
        label="Save"
        icon={heart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        onClick={handleHeartToggle}
      />
    </div>
  )
}
