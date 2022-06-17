import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Credits() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '100%',
          margin: '5px',
        }}
      >
        <Button
          href="/credits/table"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          ALL CREDITS
        </Button>
        <Button
          href="/credits/create"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          NEW CREDIT
        </Button>
      </Box>
      <Outlet />
    </div>
  );
}
