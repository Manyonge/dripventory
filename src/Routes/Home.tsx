import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { AppBar, Avatar, Menu, MenuItem, Toolbar, Typography, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles'
export default function Home() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose= ()=>{
    setAnchorEl(null);
  }

  return (
    <div>
      <AppBar position= "static">
        <CssBaseline /> 
        <Toolbar>
          <Link to= "/">
          <Typography align= "left" variant= "h5" component= "h1">
            Dripventory
            </Typography>
            </Link>
          <Typography
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}>
              CUSTOMERS
              </Typography>
              <div >
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose= {handleClose}
                >
                  <Link to= "/customers/create" style={{textDecoration: "none"}} onClick={handleClose}>
                    <MenuItem>New Customer</MenuItem>
                    </Link>
                    <Link to= "/customers/table" style={{textDecoration: "none"}} onClick={handleClose}>
                      <MenuItem>All Customers</MenuItem>
                    </Link>
                  </Menu>
                </div>
        </Toolbar>
      </AppBar>


      < Outlet />

    </div>
  )
}
