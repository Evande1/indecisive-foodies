import { Box } from '@mui/system';

import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';
import FoodTable from '../components/FoodTable/FoodTable';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type mealData = {
  _id: string;
  meal: string;
  category: string;
};

const url = config.server.url;
// //const headers
const AdminPage = () => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  const [mealList, setMealList] = useState<mealData[]>([]);

  useEffect(() => {
    if (!user) {
      navigate('/login')
  } else {
      getAllMeals();
  }
  }, [navigate,user]);

  const getAllMeals = () => {
    const token = JSON.parse(localStorage.getItem('user') || '').token;
    axios
      .get(`${url}/meal`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const allMeals: mealData[] = response.data;
        setMealList(allMeals.reverse());
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        padding: '25px',
        height: 'auto',
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
        <FoodTable meals={mealList} />
      </Box>
    </Box>
  );
};

export default AdminPage;
