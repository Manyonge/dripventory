import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Customers() {
  const [customers, setCustomers] = useState('')



  
  return (
    <div>
      <div
        style= {{
          maxWidth: "80%"
        }}
      >
        <Button
          href= "/customers/table"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          ALL CUSTOMERS
        </Button>
        <Button
          href= "/customers/create"
          size= "medium"
          sx={{
            flexGrow: "1"
          }}
          variant= "contained"
          disableRipple
        >
          NEW CUSTOMER
        </Button>
      </div>
      <Outlet />
    </div>
  )
}
