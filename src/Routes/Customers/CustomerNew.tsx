import { Box, Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Axios, { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

type FormValues = {
  instagramHandle: string;
  phoneNumber: string;
  shoeSize: number;
  hoodieSize: string;
};

export default function CustomersNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const url = 'http://localhost:3005/customers/create';
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response: AxiosResponse = await Axios.post(url, data);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useMutation(onSubmit, {
        onSuccess: () => {
          queryClient.invalidateQueries('customers');
        },
      }).mutate(data);
      return response.data;
    } catch (err: any) {
      return 'there was an error';
      throw err;
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
        </Box>
      </form>
    </div>
  );
}
