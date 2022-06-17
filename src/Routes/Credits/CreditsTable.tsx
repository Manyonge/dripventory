import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import Axios from 'axios';

type Credits = {
  transactionType: string;
  amount: number;
  date: string;
};
const url = 'http://localhost:3005/credits';
const getCredits = async () => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (err) {
    return 'there was an error';
    throw err;
  }
};

export default function CreditsTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const query = useQuery<Credits[], Error, Credits[]>('credits', getCredits);
  return (
    <div>
      <p>{JSON.stringify(query.data)}</p>
    </div>
  );
}
