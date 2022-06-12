import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Stocks() {
  return (
    <div>
      <Box sx= {{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "5px"        
      }}
      >
        <Button
          href= "/stocks/table"
          size= "medium"
          sx={{
            flexGrow: "1",
            maxWidth: "30%",
            marginRight: "20px"
          }}
          variant= "contained"
          disableRipple
        >
          ALL STOCKS
        </Button>
        <Button
          href= "/stocks/create"
          size= "medium"
          sx={{
            flexGrow: "1",
            maxWidth: "30%",
            marginRight: "20px"
          }}
          variant= "contained"
          disableRipple
        >
          NEW STOCK
        </Button>
      </Box>
      <Outlet/>
    </div>
  )
}
