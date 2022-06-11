import React from 'react'
import { Outlet } from 'react-router-dom'
import Link from '@mui/material/Link' 
import { AppBar, Menu, MenuItem, Toolbar, Typography, CssBaseline } from '@mui/material';
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
          <Link href= "/">
          <Typography variant= "h5" component= "h1">
            Dripventory
            </Typography>
            </Link>
                <div>
          <Typography
                  aria-controls= "menu-app"
                  aria-haspopup= "true"
                  onClick={handleMenu}
                >
              CUSTOMERS
              </Typography>
                <div>
                <Menu
                    id= "menu-app"
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
                    <Link
                      href= "/customers/create"
                      style={{textDecoration: "none"}}
                      onClick={handleClose}
                    >
                    <MenuItem>New Customer</MenuItem>
                    </Link>
                  </Menu>
                </div>
                </div>
        </Toolbar>
      </AppBar>


      < Outlet />

    </div>
  )
}
