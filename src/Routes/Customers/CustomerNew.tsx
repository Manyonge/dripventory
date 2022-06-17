import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Axios from 'axios';

type FormValues = {
  instagramHandle: string;
  phoneNumber: string;
  shoeSize: number;
  hoodieSize: string;
};

export default function CustomersNew() {
  const [submitted, setSubmitted] = useState(false);
  const [notSubmitted, setNotSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const url = 'http://localhost:3005/customers/create';

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response: any = await Axios.post(url, data);
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      setNotSubmitted(err.message);
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
            label="Instagram Handle"
            variant="outlined"
            size="small"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            {...register('instagramHandle', { required: true })}
          />
          {errors.instagramHandle && <span>Instagram handle is required</span>}
          <TextField
            label="Phone Number"
            variant="outlined"
            size="small"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && <span>Phone Number is required</span>}
          <TextField
            label="Shoe Size"
            variant="outlined"
            size="small"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            {...register('shoeSize', {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.shoeSize && <span>shoeSize is required</span>}
          <TextField
            variant="outlined"
            size="small"
            label="Hoodie size"
            sx={{
              minWidth: '80%',
              margin: '5px',
            }}
            {...register('hoodieSize', { required: true })}
          />
          {errors.hoodieSize && <span>hoodie size is required</span>}
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
          {submitted && <Navigate to="/" replace />}
          {notSubmitted && <div>{notSubmitted}</div>}
        </Box>
      </form>
    </div>
  );
}
