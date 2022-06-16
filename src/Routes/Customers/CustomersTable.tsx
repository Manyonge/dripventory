import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import {useQuery, useQueryClient} from 'react-query'
import Axios  from 'axios'
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell
} from '@table-library/react-table-library'

type Props = {
  queryKey: [string, { id: number}]
}
type Customer = {
  instagramHandle: string,
  phoneNumber: string,
  shoeSize: number,
  hoodieSize: string
}
export default function CustomersTable() {
  const queryClient = useQueryClient()
  const url = 'http://localhost:3005/customers'

  const fetchCustomers= async (props: Props): Promise<Customer>=>{
    const [, { id }]= props.queryKey
    const {data}= await Axios.get(url)
    return data
  }
  return (
    <div>

    </div>
    )
}
