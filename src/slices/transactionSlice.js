import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    transaction: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getAllTransaction = createAsyncThunk('transaction/getTransactions', async(event, thunkApi) => {
    try {
        const { data } = await axios.get("https://joof-backend.vercel.app/api/transaction",  {withCredentials: true})

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

const transactionSlice = createSlice({
    name:"transaction",
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
    }
})

export default transactionSlice.reducer