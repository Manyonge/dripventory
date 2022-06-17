import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import Axios from 'axios';

type Debits = {
  type: string;
  amount: number;
  date: string;
};
const url = 'http://localhost:3005/debits';
const getDebits = async () => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (err) {
    return 'there was an error';
    throw err;
  }
};
export default function DebitsTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const query = useQuery<Debits[], Error, Debits[]>('debits', getDebits);
  return (
    <div>
      <p>{JSON.stringify(query.data)}</p>
    </div>
  );
}
