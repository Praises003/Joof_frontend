import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import birthday from '../assets/conference.jpg'
import fundraising from '../assets/fundraising.jpg'
import graduation from '../assets/graduation.jpg'
import meeting from '../assets/meeting.jpg'
import event from '../assets/event2.jpeg'
import eventImg from "../assets/ev bg.jpg"
import wedding from "../assets/wedding_pic.jpg"
import seminar from "../assets/seminar.jpg"
import exhibition from "../assets/Exhibition.jpg"
import christopher from "../assets/christopher.jpg"
import sergio from "../assets/sergio.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"

const initialState = {
    events: [{
        id: 1,
        name: "CERTIFIED - HealthCare Champion Training Course",
        time: "10:00AM",
        price: 9000,
        date: "November 10, 2023",
        img: eventImg,
        text: "HealthCare Medical Association."
    },
    {
            id: 2,
            name: "Vertizo International Conference",
            time: "12:00 PM",
            price: 5000,
            date: "November 11, 2023",
            img: seminar,
            text: "The Medical Association."
    },
    {
        id: 3,
        name: "Golden Jubilee",
        category: "Birthday",
        price: "Free",
        date: "November 12, 2023",
        img: birthday,
        text: "Alfred Publishing Ltd"
    },
    {
        id: 4,
        name: "Communication Conference",
        time: "11:00AM",
        status: 10000,
        date: "November 13, 2023",
        img: meeting,
        text: "National Communication Organization."
    },
    {
        id: 5,
        name: "Econometrics Seminar",
        time: "1:00PM",
        price: 2000,
        date: "November 14, 2023",
        img: seminar,
        text: "Econometric Group of Nigeria."
    },
    {
        id: 6,
        name: "Women Empowerment",
        time: "2:00PM",
        paid: "Free",
        date: "November 15, 2023",
        img: graduation,
        text: "Women Empowerment Organization"
    }]
}

const moreEventSlice = createSlice({
    name:"moreEvent",
    initialState,
    reducers: {
        // eventAction: (state) => {
        //     state.events = state.events
         }
        // reset: (state) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.isError = false
        //     state.message = ""
        //  },
        
})

export default moreEventSlice.reducer
export const {eventAction} = moreEventSlice.actions
