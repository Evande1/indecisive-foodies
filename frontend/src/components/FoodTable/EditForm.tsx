import {
  Dialog,
  DialogContent,
  DialogTitle,
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
import axios from 'axios';
import config from '../../config.json';

type props = {
  // title: string,
  // children: Node,
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;

  mealData: {
    _id: string;
    meal: string;
    category: string;
  } ;
};

const url = config.server.url;

const EditForm = ({ openPopup, setOpenPopup, mealData }: props) => {

  const validationSchema = yup.object({
    category: yup.string().required('Required'),
    meal: yup
      .string()
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  });
  
  const formik = useFormik({
    enableReinitialize : true,
    initialValues: {
      meal: mealData.meal,
      category: mealData.category,
    },
    onSubmit: async (values) => {
      try {
        axios.put(`${url}/meal/${mealData._id}`, { ...values });
        
      } catch (error) {
          console.log(error);
      }
    },
    validationSchema: validationSchema,
  });

  console.log(mealData)

  return (
    <Dialog open={openPopup} maxWidth="md" onClose={() => setOpenPopup(false)}>
      <DialogTitle>
        <div>title goes here</div>
      </DialogTitle>
      <DialogContent dividers>
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
            <FormControl
              size="small"
              sx={{ minWidth: 120 }}
              variant="standard"
              error={formik.touched.category && Boolean(formik.errors.category)}
            >
              <InputLabel id="select label">Category</InputLabel>
              <Select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
              >
                <MenuItem value="BREAKFAST">Breakfast</MenuItem>
                <MenuItem value="LUNCH">Lunch</MenuItem>
                <MenuItem value="DINNER">Dinner</MenuItem>
                <MenuItem value="SNACKS">Snacks</MenuItem>
              </Select>
              {formik.touched.category && Boolean(formik.errors.category) ? (
                <FormHelperText>Required</FormHelperText>
              ) : null}
            </FormControl>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: 'secondary.main' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditForm;
