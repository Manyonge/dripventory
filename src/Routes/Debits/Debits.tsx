import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Debits() {
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
          href="/debits/table"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          ALL DEBITS
        </Button>
        <Button
          href="/debits/create"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          NEW DEBIT
        </Button>
      </Box>
      <Outlet />
    </div>
  );
}
