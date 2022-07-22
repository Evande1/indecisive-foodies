import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { AppDispatch } from '../app/store';

export default function NavBar() {
  const history = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    history('/')
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'info.main' }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color={'inherit'} onClick={() => history('/')}>
              Indecisive Foodies
            </Button>
            <Button
              sx={{ marginLeft: '20px' }}
              color={'inherit'}
              onClick={() => history('/form')}
            >
              Form
            </Button>
            <Button
              sx={{ marginLeft: '20px' }}
              color={'inherit'}
              onClick={() => history('/admin')}
            >
              Admin
            </Button>
              <Button sx={{marginLeft: "20px"}} color={"inherit"} onClick={() => history("/scheduler")} >
                  Scheduler
              </Button>
          </Typography>
          {user ? (
            <Button color="inherit" onClick={() => onLogout()}>
            Logout
          </Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => history('/login')}>
                Login
              </Button>
              <Button color="inherit" onClick={() => history('/register')}>
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
