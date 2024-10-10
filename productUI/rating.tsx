"use client"

import * as React from "react"
import Link from "next/link"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Chip } from "@mui/material"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"

export default function RatingFav() {
  const [value, setValue] = React.useState<number | null>(2)

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
      <Link href="/" className="">
        <Chip
          className="justify-self-end"
          size="small"
          variant="outlined"
          color="primary"
          label="Save"
          icon={<FavoriteIcon />}
        />
      </Link>
    </div>
  )
}
