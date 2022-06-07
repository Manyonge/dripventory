import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
export default function Home() {
  return (
    <div>
      <Typography
        component= "h1"
        variant= "h3"
        align= "center"
      >
        DRIPVENTORY
      </Typography>
      <Tabs centered >
        <Tab label= "Home" to= "/" component= {Link} />
        <Tab label= "Customers"  to= "customers/table" component= {Link} />
        <Tab label= "Credits"  to= "credits/table" component= {Link} />
        <Tab label= "Debits"  to= "debits/table" component= {Link} />
        <Tab label= "Stock"  to= "stock/table" component= {Link} />
      </Tabs>
      < Outlet />

    </div>
  )
}
