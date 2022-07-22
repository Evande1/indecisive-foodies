import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import { AppDispatch } from '../app/store';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, } = formData;

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    
  };
  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        padding: '25px',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          width: '90%',
          background: 'white',
          borderRadius: '16px',
          paddingY: 5,
          paddingX: 7,
        }}
      >
        <Typography className="form-header" variant={'h4'} color="#00203FFF">
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={{ marginTop: 5 }}>
            <TextField
              label="Enter Your email"
              variant="outlined"
              name="email"
              type='email'
              className='form-control'
              id='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </Box>
          <Box sx={{ marginTop: 5 }}>
            <TextField
              label="Enter Your password"
              variant="outlined"
              name="password"
              type='password'
              className='form-control'
              id='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button
              className="form-submit"
              variant="contained"
              type="submit"
              sx={{ backgroundColor: 'secondary.main' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage; 