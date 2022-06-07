import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Routes/Home'
import Credits from './Routes/Credits/Credits'
import Customers from './Routes/Customers/Customers'
import CustomersTable from './Routes/Customers/CustomersTable'
import Debits from './Routes/Debits/Debits'
import Stocks from './Routes/Stocks/Stocks'
import CustomerNew from './Routes/Customers/CustomerNew';
import CustomerDetails from './Routes/Customers/CustomerDetails';
import CustomerUpdate from './Routes/Customers/CustomerUpdate';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<Home />} >
            <Route path= "customers" element= {<Customers />} >
              <Route path= "table" element= {<CustomersTable />} />
              <Route path= "create" element= {<CustomerNew />} />
              <Route path= ":id" element= {<CustomerDetails />} />
              <Route path= ":id/update" element= {<CustomerUpdate />}/>

            </Route>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
