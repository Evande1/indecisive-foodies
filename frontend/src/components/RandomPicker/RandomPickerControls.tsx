import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type RandomPickerControlsProps = {
    isRunning: boolean,
    hasChoice: boolean,
    start: () => void,
    stop: () => void,
    reset: () => void,
};

const RandomPickerControls = ({isRunning, hasChoice, start, stop, reset} : RandomPickerControlsProps) =>  {
        return (
            <Box sx={{width: "200px", marginX: "auto", display: "flex", justifyContent: "space-between"}}>
                <Button
                    onClick={isRunning ? stop : start}
                    sx={{color:'#00203FFF'}}
                >
                    {isRunning ? 'stop' : 'start'}
                </Button>
                <Button
                    disabled={isRunning || !hasChoice}
                    onClick={reset} 
                    sx={{color:'#00203FFF'}}
                >
                    reset
                </Button>
            </Box>
        );
}


export default RandomPickerControls;