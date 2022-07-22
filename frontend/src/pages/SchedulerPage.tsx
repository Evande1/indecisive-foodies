import React, {useEffect, useState} from 'react';
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Box from "@mui/material/Box";
import axios from "axios";
import config from "../config.json";
import {useQuery} from "react-query";
import {eventData} from "../types/event";
import {Alert, Button} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const localizer = momentLocalizer(moment)
const url = config.server.url;

interface event {
    title: string,
    allDay: boolean,
    start: number,
    end: number,
}


const scehdule: () => Promise<any> = async () => {
    const res = await axios.get(`${ url }/event/schedule`);
    return res.data;
}


const getAllEvents: () => Promise<eventData[]> = async () => {
    const res = await axios.get(`${ url }/event`);
    return res.data;
}


const SchedulerPage = () => {
    // schedule for the next 7 days
    const { user } = useSelector(
        (state: any) => state.auth
    )

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }

    }, [user, navigate]);


    const handleSchedule = () => {
        scheduleQuery.refetch();
        window.location.reload();
    };

    const handleDelete = () => {
        axios.delete(`${ url }/event/schedule`)
            .then((response) => {
                refetch();
            })
            .catch(error => console.log(`Error: ${ error }`))
        window.location.reload();

    }
    const scheduleQuery = useQuery("schedule", scehdule, { refetchOnWindowFocus: false,
        enabled: false });
    const { data, status, refetch } = useQuery("event", getAllEvents);




    return (
        <Box sx={{ width: "70%", marginLeft: "auto", marginRight: "auto"}}>
            {scheduleQuery.status == "error" && <p>Error scheduling </p>}
            {scheduleQuery.status === "success" && <Alert sx={{marginTop: 3, marginBottom: 3    }} severity="success">{scheduleQuery.data.message}</Alert> }
            {scheduleQuery.status === "loading" && <p>Fetching data...</p>}
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            <Box sx={{marginTop: 5}}>
                <Calendar
                    events = {data?.map(event => {
                        return {
                            title: event.title,
                            allDay: true,
                            start: Date.parse(event.start),
                            end: Date.parse(event.end),
                        }
                    })}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    step={60}
                    style={{ height: 500 }}
                />
            </Box>
            <Box sx={{marginTop: 5}}>
                <Button sx={{marginRight: 3}} variant="contained" onClick={handleSchedule}>
                    Schedule 3 days food
                </Button>
                <Button variant="contained" onClick={handleDelete}>
                    Clear Schedule
                </Button>
            </Box>

        </Box>

) ;
}


export default SchedulerPage;