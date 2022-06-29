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
import { useFormik } from 'formik';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import axios from "axios";
import config from "../config.json";

const url = config.server.url;

const FormPage = () => {
  const validationSchema = yup.object({
    category: yup.string().required('Required'),
    meal: yup
      .string()
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  });

  const formik = useFormik({
    initialValues: {
      meal: '',
      category: '',
    },
    onSubmit: (values, {resetForm}) => {
      axios.post(`${ url }/meal`, values)
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
          Fill in your food choices!
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ marginTop: 5 }}>
            <TextField
              label="Food Choice"
              variant="outlined"
              name="meal"
              onChange={formik.handleChange}
              value={formik.values.meal}
              onBlur={formik.handleBlur}
              error={formik.touched.meal && Boolean(formik.errors.meal)}
              helperText={formik.touched.meal && formik.errors.meal}
            />
          </Box>
          <Box sx={{ marginTop: 5 }}>
            <FormControl size='small' sx={{minWidth:120}} variant="standard" error={formik.touched.category && Boolean(formik.errors.category)}>
              <InputLabel id="select label">Category</InputLabel>
              <Select
                name="category"
                className='form-select'
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
              
              >
                <MenuItem value="BREAKFAST">Breakfast</MenuItem>
                <MenuItem value="LUNCH">Lunch</MenuItem>
                <MenuItem value="DINNER">Dinner</MenuItem>
                <MenuItem value="SNACKS">Snacks</MenuItem>
              </Select>
              {formik.touched.category && Boolean(formik.errors.category) ? <FormHelperText>Required</FormHelperText> : null}
            </FormControl>
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
  );
};

export default FormPage;
// colors :#00203FFF, #ADEFD1FF