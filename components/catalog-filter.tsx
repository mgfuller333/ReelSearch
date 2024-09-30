import * as React from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { alpha } from "@mui/material/styles"

export default function CatalogFilter() {
  // Helper function to generate RGBA color
  const rgba = (r, g, b, a) => `rgba(${r},${g},${b},${a})`

  // Translucent white colors
  const translucentWhite = rgba(255, 255, 255, 0.15)
  const translucentWhiteHover = rgba(255, 255, 255, 0.25)

  return (
    <Box
      sx={{
        minWidth: 120,
        backgroundColor: translucentWhite,
        "&:hover": {
          backgroundColor: translucentWhiteHover,
        },
        p: 2,
        borderRadius: 1,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          sx={{ color: "black" }}
        >
          <MenuItem value={10} sx={{ color: "black" }}>
            Relevance
          </MenuItem>
          <MenuItem value={20} sx={{ color: "black" }}>
            Trending
          </MenuItem>
          <MenuItem value={30} sx={{ color: "black" }}>
            Latest arrivals
          </MenuItem>
          <MenuItem value={40} sx={{ color: "black" }}>
            Price: Low to high
          </MenuItem>
          <MenuItem value={50} sx={{ color: "black" }}>
            Price: High to low
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
