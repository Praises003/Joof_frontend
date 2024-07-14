import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    eventPackage: []
}

export const createEvent = createAsyncThunk('event/createEvent', async(event, thunkApi) => {
    try {
        const { data } = await axios.post("https://joof-backend.vercel.app/api/event", event, {withCredentials: true})

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

const eventPackageSlice = createSlice({
    name:"event",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        },
        addToCart : (state, action) => {
           
            state.eventPackage = [...state.eventPackage, {...action.payload}]
           
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.eventPackage = state.eventPackage.filter(item => item._id !== itemIdToRemove);
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

export default eventPackageSlice.reducer
export const { reset, addToCart, removeFromCart } = eventPackageSlice.actions 