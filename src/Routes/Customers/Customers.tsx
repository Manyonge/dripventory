import { Box, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Customers() {
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
          href="/customers/table"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          ALL CUSTOMERS
        </Button>
        <Button
          href="/customers/create"
          size="medium"
          sx={{
            flexGrow: '1',
            maxWidth: '30%',
            marginRight: '20px',
          }}
          variant="contained"
          disableRipple
        >
          NEW CUSTOMER
        </Button>
      </Box>
      <Outlet />
    </div>
  );
}
