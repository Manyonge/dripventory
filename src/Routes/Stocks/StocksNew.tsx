import { Box, Button, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { useForm } from 'react-hook-form';
import Axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  type: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CreditsNew() {
  const url = 'http://localhost:3005/stocks/create';
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
          navigate('/stocks/table');
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
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            variant="outlined"
            autoFocus
            size="small"
            label="Type of Transaction"
            {...register('type', { required: true })}
          />
          <span>
            {errors.type && <span>Transaction type is required</span>}
          </span>
          <TextField
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            variant="outlined"
            label="Name of Item"
            size="small"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Name of Item is required</span>}
          <TextField
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            variant="outlined"
            type="number"
            size="small"
            label="price"
            {...register('price', { required: true, valueAsNumber: true })}
          />
          {errors.price && <span>Transaction price is required</span>}
          <TextField
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            variant="outlined"
            type="number"
            size="small"
            label="quantity"
            {...register('quantity', { required: true, valueAsNumber: true })}
          />
          {errors.quantity && <span>Item quantity is required</span>}
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
