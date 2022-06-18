import { Box, Button, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { useForm } from 'react-hook-form';
import Axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  transactionType: string;
  amount: number;
  date: string;
};

export default function CreditsNew() {
  const url = 'http://localhost:3005/credits/create';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          const handler = async () => {
            try {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const response: AxiosResponse = await Axios.post(url, data);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              return response.data;
            } catch (err: any) {
              return 'there was an error';
              throw err;
            }
          };
          handler();
          navigate('/credits/table');
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            margin: 'auto',
            maxWidth: '50%',
            border: '2px solid black',
            borderRadius: '10px',
          }}
        >
          <TextField
            variant="outlined"
            autoFocus
            size="small"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            label="Type of Transaction"
            {...register('transactionType', { required: true })}
          />
          {errors.transactionType && <span>Transaction type is required</span>}
          <TextField
            variant="outlined"
            label="Amount"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            size="small"
            {...register('amount', { required: true, valueAsNumber: true })}
          />
          {errors.amount && <span>Transaction Amount is required</span>}
          <TextField
            variant="outlined"
            type="date"
            size="small"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            label="date"
            {...register('date', { required: true, valueAsDate: true })}
          />
          {errors.date && <span>Transaction date is required</span>}
          <Button
            endIcon={<KeyboardArrowRightIcon />}
            type="submit"
            color="secondary"
            variant="contained"
          >
            SUBMIT
          </Button>
        </Box>
      </form>
    </div>
  );
}
