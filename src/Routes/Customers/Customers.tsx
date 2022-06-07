import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function Customers() {
  return (
    <div>
        <Tabs>
          <Tab label= "ALL CUSTOMERS" to= "table" component= {Link} />          
          <Tab label= "NEW CUSTOMER" to= "create" component= {Link} />          
        </Tabs>
      <Outlet />
    </div>
  )
}
