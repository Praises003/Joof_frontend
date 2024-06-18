import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    event: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const createEvent = createAsyncThunk('event/createEvent', async(event, thunkApi) => {
    try {
        const token = thunkApi.getState().user.user.token

     

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(/*https://joof-backend.onrender.com/api/event"*/'https://joof-backend.onrender.com/api/event', event, config, {withCredentials: true})

        console.log(data)

        // if (data) {
        //     localStorage.setItem('user', JSON.stringify(data))
        // }

        return data

    } catch(err) {
       // const errMsg = (/*err.response && */ /*err.response.data  || */  err.response.data.message /*|| err.message || err.toString() */)
       const errMsg = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        console.log(errMsg)
        return thunkApi.rejectWithValue(errMsg)

    }
})

const eventSlice = createSlice({
    name:"event",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
        
    }, 
    extraReducers: (builder) => {
        builder.addCase(createEvent.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(createEvent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.event = action.payload
        })
        builder.addCase(createEvent.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.event = ""
        })
        // builder.addCase(login.pending, (state, action) => {
        //     state.isLoading = true
        // })
        // builder.addCase(login.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.user = action.payload
        // })
        // builder.addCase(login.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        //     state.user = null
        // })
       
        
    } 
})

export default eventSlice.reducer
export const { reset } = eventSlice.actions 