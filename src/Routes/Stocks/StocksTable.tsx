import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import Axios from 'axios';

type Stocks = {
  type: string;
  amount: number;
  date: string;
};
const url = 'http://localhost:3005/stocks';
const getStocks = async () => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (err) {
    return 'there was an error';
    throw err;
  }
};
export default function StocksTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const query = useQuery<Stocks[], Error, Stocks[]>('debits', getStocks);
  return (
    <div>
      <p>{JSON.stringify(query.data)}</p>
    </div>
  );
}
