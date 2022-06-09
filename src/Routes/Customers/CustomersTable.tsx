
import { Typography } from '@mui/material'
import {useState} from 'react'
import Axios from 'axios'
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell
} from '@table-library/react-table-library'

interface Data {
  instagramHandle: string,
  phoneNumber: string,
  shoeSize: number,
  hoodieSize: string
}

export default function CustomersTable() {

  const [customers, setCustomers] = useState('')


  return (
      <Typography variant= "h4">
        Customers Table
      </Typography>

    )
}
