import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Axios from 'axios'
export default function CustomersTable() {
  const [customers, setCustomers] = useState('')
  Axios.get('http://localhost:3005/customers')
  .then((response)=>{
    console.log(response.data)
  })
  return (
    <div>
      <Typography variant= "h1">CustomersTable</Typography>
    </div>
  )
}
