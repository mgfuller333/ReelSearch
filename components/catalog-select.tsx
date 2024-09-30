import * as React from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

export default function CatalogNav() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "white",
            "&.Mui-focused": {
              color: "transparent !important",
            },
            "&.MuiInputLabel-shrink": {
              color: "transparent !important",
            },
          }}
        >
          Menu
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiSelect-selectMenu": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
            },
          }}
          inputProps={{
            sx: {
              color: "white",
            },
          }}
        >
          <MenuItem
            value={10}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Starters
          </MenuItem>
          <MenuItem
            value={20}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Entrees
          </MenuItem>
          <MenuItem
            value={30}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Drinks
          </MenuItem>
          <MenuItem
            value={30}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Sides
          </MenuItem>
          <MenuItem
            value={30}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Deserts
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
