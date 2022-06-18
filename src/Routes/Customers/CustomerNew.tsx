import { Box, Button, TextField } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitHandler, useForm } from 'react-hook-form';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Axios, { AxiosResponse } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
          navigate('/customers/table');
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
