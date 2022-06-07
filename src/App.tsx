import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Credits from './Routes/Credits/Credits'
import Customers from './Routes/Customers/Customers'
import Debits from './Routes/Debits/Debits'
import Stocks from './Routes/Stocks/Stocks'
import Create from './Create'
function App() {


  return (
    <div className="App">
      <Create />
    </div>
  );
}

export default App;
