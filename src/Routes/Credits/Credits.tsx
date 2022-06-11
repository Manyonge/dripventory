import Button from '@mui/material/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Credits() {
  return (
    <div>
      <div
        style= {{
          maxWidth: "80%"
        }}
      >
        <Button
          href= "/credits/table"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          ALL CREDITS
        </Button>
        <Button
          href= "/credits/create"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          NEW CREDIT
        </Button>
      </div>
      <Outlet/>
    </div>
  )
}
