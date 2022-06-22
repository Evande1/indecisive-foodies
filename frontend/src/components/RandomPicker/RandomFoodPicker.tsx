import React from "react";
import RandomPickerChoice from "./RandomPickerChoice";
import RandomPickerControls from "./RandomPickerControls";
import Box from "@mui/material/Box";

type RandomPickerProps = {
    items: string[];
}

type RandomPickerState = {
    isRunning: boolean,
    currentChoice: string,
}

class RandomPicker extends React.PureComponent<RandomPickerProps, RandomPickerState> {
    private interval: NodeJS.Timeout;
    private intervalDuration: number;
    private duration: number;
    constructor(props: RandomPickerProps) {
        super(props);

        this.state = {
            isRunning: false,
            currentChoice: ''
        };
        

        // @ts-ignore
        this.interval = null;
        this.intervalDuration = 25;
        this.duration = 1000;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.pickChoice = this.pickChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
    }

    start() {
        clearInterval(this.interval);
        this.interval = setInterval(this.setChoice, this.intervalDuration);
        this.setState({ isRunning: true });
        setTimeout(() => {
            if (this.state.isRunning) {
                this.stop()
            }
        }, this.duration);
    }

    stop() {
        clearInterval(this.interval);
        this.setState({ isRunning: false });
    }

    reset() {
        clearInterval(this.interval);
        this.setState({ isRunning: false, currentChoice: '' });
    }

    pickChoice() {
        const { items } = this.props;
        const choice = items[Math.floor(Math.random() * items.length)];
        return choice;
    }

    setChoice() {
        this.setState({ currentChoice: this.pickChoice() })
    }

    render() {
        const { isRunning, currentChoice } = this.state;

        return (
            <Box sx={{ }}>
                <RandomPickerChoice choice={currentChoice} />
                <RandomPickerControls
                    isRunning={isRunning}
                    hasChoice={currentChoice.trim().length > 0}
                    start={this.start}
                    stop={this.stop}
                    reset={this.reset}
                />
            </Box>
        );
    }
}

export default RandomPicker;


