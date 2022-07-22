import React from 'react';
import MainRouter from "./MainRouter";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import NavBar from "./components/AppBar";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const theme  = createTheme({
    palette: {
        background: {
            paper: '#ADEFD1FF',
        },
        text: {
        },
        common: {
            white: "#ffffff",
            black: "#000000",
        },
        info: {
            main: "#2C5F3D",
            light: "#97BC62FF"
        },
        secondary: {
            main: "#00203FFF",
            light: "#FFE77AFF"
        }

    }
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid item xs={ 12 }><NavBar/></Grid>
                    <MainRouter />
                </Grid>
            </ThemeProvider>
        </QueryClientProvider>

    )
}

export default App;
