import Axios from 'axios';
import * as React from 'react';
import { useQueryClient, useQuery } from 'react-query';

type Customers = {
  instagramHandle: string;
  phoneNumber: string;
  shoeSize: number;
  hoddieSize: string;
};
const url = 'http://localhost:3005/customers';
const getCustomers = async () => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (err) {
    return 'there was an error';
    throw err;
  }
};

export default function CustomersTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const query = useQuery<Customers[], Error, Customers[]>(
    'customers',
    getCustomers,
  );
  return (
    <div>
      <p>{JSON.stringify(query.data)}</p>
    </div>
  );
}
