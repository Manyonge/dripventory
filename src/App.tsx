import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Routes/Home';
import Credits from './Routes/Credits/Credits';
import Customers from './Routes/Customers/Customers';
import CustomersTable from './Routes/Customers/CustomersTable';
import Debits from './Routes/Debits/Debits';
import Stocks from './Routes/Stocks/Stocks';
import CustomerNew from './Routes/Customers/CustomerNew';
import CustomerDetails from './Routes/Customers/CustomerDetails';
import CustomerUpdate from './Routes/Customers/CustomerUpdate';
import CreditsTable from './Routes/Credits/CreditsTable';
import CreditsNew from './Routes/Credits/CreditsNew';
import CreditsDetails from './Routes/Credits/CreditsDetails';
import CreditsUpdate from './Routes/Credits/CreditsUpdate';
import DebitsTable from './Routes/Debits/DebitsTable';
import DebitsNew from './Routes/Debits/DebitsNew';
import DebitsDetails from './Routes/Debits/DebitsDetails';
import DebitsUpdate from './Routes/Debits/DebitsUpdate';
import StocksTable from './Routes/Stocks/StocksTable';
import StocksNew from './Routes/Stocks/StocksNew';
import StocksDetails from './Routes/Stocks/StocksDetails';
import StocksUpdate from './Routes/Stocks/StocksUpdate';

const themeOptions = {
  palette: {
    primary: {
      main: '#EFC53B',
    },
    secondary: {
      main: '#1C180C',
    },
  },
};

const theme = createTheme(themeOptions);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="customers" element={<Customers />}>
                <Route path="table" element={<CustomersTable />} />
                <Route path="create" element={<CustomerNew />} />
                <Route path=":id" element={<CustomerDetails />} />
                <Route path=":id/update" element={<CustomerUpdate />} />
              </Route>
              <Route path="credits" element={<Credits />}>
                <Route path="table" element={<CreditsTable />} />
                <Route path="create" element={<CreditsNew />} />
                <Route path=":id" element={<CreditsDetails />} />
                <Route path=":id/update" element={<CreditsUpdate />} />
              </Route>
              <Route path="debits" element={<Debits />}>
                <Route path="table" element={<DebitsTable />} />
                <Route path="create" element={<DebitsNew />} />
                <Route path=":id" element={<DebitsDetails />} />
                <Route path=":id/update" element={<DebitsUpdate />} />
              </Route>
              <Route path="stocks" element={<Stocks />}>
                <Route path="table" element={<StocksTable />} />
                <Route path="create" element={<StocksNew />} />
                <Route path=":id" element={<StocksDetails />} />
                <Route path=":id/update" element={<StocksUpdate />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
