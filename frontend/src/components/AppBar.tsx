import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";


export default function NavBar() {

    const history = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{backgroundColor: "info.main"}} position="static">
                <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color={"inherit"} onClick={() => history("/")} >
                                Indecisive Foodies
                            </Button>
                            <Button sx={{marginLeft: "20px"}} color={"inherit"} onClick={() => history("/form")} >
                                Form
                            </Button>
                            <Button sx={{marginLeft: "20px"}} color={"inherit"} onClick={() => history("/admin")} >
                                Admin
                            </Button>
                            <Button sx={{marginLeft: "20px"}} color={"inherit"} onClick={() => history("/scheduler")} >
                                Scheduler
                            </Button>
                        </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}