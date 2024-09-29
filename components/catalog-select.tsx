"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"

export default function CatalogNav() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Menu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Starters</MenuItem>
          <MenuItem value={20}>Entres</MenuItem>
          <MenuItem value={30}>Drinks</MenuItem>
          <MenuItem value={30}>Sides</MenuItem>
          <MenuItem value={30}>Deserts</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
