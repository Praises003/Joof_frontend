import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    guest: [],
     Error: false,
     Success: false,
     Loading: false,
     message: ""
}

 export const addAsyncGuest = createAsyncThunk('guest/addGuest', async(guest, thunkApi) => {
     try {
         const { data } = await axios.post("https://joof-backend.vercel.app/api/guest", guest, {withCredentials: true})

         console.log(data)

         

         return data

     } catch(err) {
         //const errMsg = (/*err.response && */ /*err.response.data  || */  err.response.data.message /*|| err.message || err.toString() */)
        const errMsg = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
         console.log(errMsg)
         return thunkApi.rejectWithValue(errMsg)

     }
})



const guestSlice = createSlice({
    name:"guest",
    initialState,
    reducers: {
        reset: (state) => {
            // state.isLoading = false
            // state.isSuccess = false
            // state.isError = false
            // state.message = ""
        },
        addGuest : (state, action) => {
             state.Loading = false
             state.Success = true
            state.Error = false
            state.message = ""
            state.guest = [...state.guest, action.payload]
            //state.guest.push(action.payload)
        }
        
    }, 
     extraReducers: (builder) => {
         builder.addCase(addAsyncGuest.pending, (state, action) => {
             state.Loading = true
         })
         builder.addCase(addAsyncGuest.fulfilled, (state, action) => {
             state.Loading = false
             state.Success = true
             state.Error = false
             state.guest = [...state.guest, action.payload]
         })
         builder.addCase(addAsyncGuest.rejected, (state, action) => {
             state.Loading = false
             state.Success = false
             state.Error = true
             state.message = action.payload
             state.guest = []
         })
        
        
    } 
})

export default guestSlice.reducer
export const { reset, addGuest } = guestSlice.actions 