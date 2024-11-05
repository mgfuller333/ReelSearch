"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

export default function CatalogNav({ client }: { client: string }) {
  const router = useRouter()

  const handleChange = (event) => {
    const selectedCategory = event.target.value
    if (selectedCategory) {
      // Assuming `client` is a string or a valid route parameter
      router.push(`/store/${client}/${selectedCategory}`)
    }
  }

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "#faefe3",
            "&.Mui-focused": {
              color: "transparent !important",
            },
            "&.MuiInputLabel-shrink": {
              color: "transparent !important",
            },
          }}
        >
          Examples
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          defaultValue=""
          onChange={handleChange}
          sx={{
            color: "#faefe3",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#faefe3",
            },
            "& .MuiSvgIcon-root": {
              color: "#faefe3",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#faefe3",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#faefe3",
            },
            "& .MuiInputBase-input": {
              color: "#faefe3",
            },
            "& .MuiSelect-selectMenu": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
            },
          }}
          inputProps={{
            sx: {
              color: "black",
            },
          }}
        >
          <MenuItem value="Food" sx={menuItemStyle}>
            Food
          </MenuItem>
          <MenuItem value="Drinks" sx={menuItemStyle}>
            Drinks
          </MenuItem>
          <MenuItem value="Clothes" sx={menuItemStyle}>
            Clothes
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const menuItemStyle = {
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
}
