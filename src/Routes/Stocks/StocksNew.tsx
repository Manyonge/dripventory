import { Box, Button, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';

type FormValues = {
  type: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CreditsNew() {
  const url = 'http://localhost:3005/stocks/create';
  const [submitted, setSubmitted] = useState(false);
  const [notSubmitted, setNotSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await Axios.post(url, data);
      if (response.status === 200) {
        setSubmitted(true);
      } else {
        setNotSubmitted(true);
      }
    } catch (err) {
      setNotSubmitted(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {submitted && <Navigate to="/" replace />}
          {notSubmitted && <div> {notSubmitted} </div>}
        </Box>
      </form>
    </div>
  );
}
