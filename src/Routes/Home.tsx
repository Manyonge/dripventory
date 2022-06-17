import React from 'react';
import { Outlet } from 'react-router-dom';
import Link from '@mui/material/Link';
import { AppBar, Toolbar, CssBaseline } from '@mui/material';

export default function Home() {
  const destinations = [
    {
      option: 'Customers',
      href: '/customers',
    },
    {
      option: 'Debits',
      href: '/debits',
    },
    {
      option: 'Stocks',
      href: '/stocks',
    },
    {
      option: 'Credits',
      href: '/credits',
    },
  ];

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link
            href="/"
            variant="h3"
            underline="none"
            color="secondary"
            sx={{
              flexGrow: '2',
              cursor: 'pointer',
            }}
          >
            Dripventory
          </Link>
          <div
            style={{
              display: 'flex',
              flexGrow: '1',
            }}
          >
            {destinations.map((destination) => (
              <Link
                key={destination.option}
                sx={{
                  marginLeft: '1.7rem',
                }}
                underline="hover"
                color="secondary"
                variant="h5"
                href={destination.href}
              >
                {destination.option}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}
