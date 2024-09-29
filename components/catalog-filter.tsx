"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"

export default function CatalogFilter() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Relevance</MenuItem>
          <MenuItem value={20}>Trending</MenuItem>
          <MenuItem value={30}>Latest arrivals</MenuItem>
          <MenuItem value={30}>Price: Low to high</MenuItem>
          <MenuItem value={30}>Price: High to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
