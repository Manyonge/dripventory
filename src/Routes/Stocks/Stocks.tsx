import Button from '@mui/material/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Stocks() {
  return (
    <div>
      <div
        style= {{
          maxWidth: "80%"
        }}
      >
        <Button
          href= "/stocks/table"
          size= "medium"
          sx={{
            flexGrow: "1"
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
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          NEW STOCK
        </Button>
      </div>
      <Outlet/>
    </div>
  )
}
