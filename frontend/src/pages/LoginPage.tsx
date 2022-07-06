import {
    Button,

    TextField,
  } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import axios from "axios";
import config from "../config.json";

const url = config.server.url;

const LoginPage = () => {
    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        // confirmPassword: yup.string()
        // .required("Please confirm your password")
        // .oneOf([yup.ref("password")], "Passwords do not match"),
      });
    
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        //   confirmPassword: ''
        },
        onSubmit: (values, {resetForm}) => {
          axios.post(`${ url }/users/login`, values)
              .then(res => {
                console.log(res);
                resetForm();
              }).catch(err => console.log(err));
        },
        validationSchema: validationSchema,
      });


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
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ marginTop: 5 }}>
              <TextField
                label="Enter Your email"
                variant="outlined"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <TextField
                label="Enter Your password"
                variant="outlined"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Button
                className='form-submit'
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
    )
}

export default LoginPage; 