import Button from '@mui/material/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Debits() {
  return (
    <div>
      <div
        style= {{
          maxWidth: "80%"
        }}
      >
        <Button
          href= "/debits/table"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          ALL DEBITS
        </Button>
        <Button
          href= "/debits/create"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          NEW DBITS
        </Button>
      </div>
      <Outlet/>  
    </div>
  )
}
