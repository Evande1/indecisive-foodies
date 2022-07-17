import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import Box from "@mui/material/Box";
import RandomPicker from "../components/RandomPicker/RandomFoodPicker";
import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../config.json";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type mealData = {
    _id: string,
    meal: string,
    category: string
}

const url = config.server.url;
const HomePage = () => {
    const { user } = useSelector(
        (state: any) => state.auth
    )
    const navigate = useNavigate();

    const [namesList, setNamesList] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('BREAKFAST');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }


    useEffect(() => {
        if (!user) {
            navigate('/login')
        } else {
            getAllMeals();
        }

    }, [user, navigate, category]);

    const getAllMeals = () => {
        console.log(category)
        const token =JSON.parse(localStorage.getItem('user') || "").token
        axios.get(`${ url }/meal/${ category }`, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },})
            .then((response) => {
                const allMeals: mealData[] = response.data;
                const allMealsNames = allMeals.map(meal => meal.meal);
                setNamesList(allMealsNames);


            })
            .catch(error => console.log(`Error: ${ error }`))
    }
    return <Grid container>
        <Grid item xs={ 12 }><Box sx={ { margin : "100px" } }/></Grid>
        <Grid item xs={ 12 }>
            <Box
                sx={ {
                    flexDirection : "column",
                    display : "flex",
                    justifyContent : "center",
                    alignContent : "center",
                    width : "400px",
                    marginX : "auto",
                    backgroundColor : "info.light",
                    paddingBottom : "15px",
                } }>
                <Box sx={ {
                    marginLeft : "auto",
                    marginRight : "auto",
                    marginTop : "20px"
                } }>
                    <Typography className="home-page-header" variant="h6">
                        Randomise Your food
                    </Typography>
                </Box>

                <RandomPicker items={ namesList }></RandomPicker>
                <Box sx={ {
                    marginLeft : "auto",
                    marginRight : "auto",
                    width : "150px",
                    marginTop : "20px"
                }
                }>
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select className="home-page-dropdown-menu" labelId="category-label" onChange={ handleChange } defaultValue={"BREAKFAST"}>
                            <MenuItem value={ "BREAKFAST" }>Breakfast</MenuItem>
                            <MenuItem value={ "LUNCH" }>Lunch</MenuItem>
                            <MenuItem value={ "DINNER" }>Dinner</MenuItem>
                            <MenuItem value={ "SNACKS" }>Snacks</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Grid>
    </Grid>
}

export default HomePage;