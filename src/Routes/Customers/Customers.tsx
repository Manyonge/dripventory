import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Customers() {
  const [customers, setCustomers] = useState('')



  
  return (
    <div>
      <Outlet />
    </div>
  )
}
