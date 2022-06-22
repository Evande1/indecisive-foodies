import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type RandomPickerChoiceProps = {
    choice: string,
}

const RandomPickerChoice = ({choice} : RandomPickerChoiceProps) => {
    const content = choice.trim().length > 0 ? choice : '?';
    return (
        <Box sx={{width: "200px", marginX: "auto", marginBottom: "20px"}}>
            <Box sx={{textAlign: "center"}}>
                <Typography variant="h5" color='#00203FFF' >
                    {content}
                </Typography>
            </Box>
        </Box>
    );

}
export default RandomPickerChoice;