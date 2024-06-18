import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    tables: [],
     error: false,
     loading: false,
    
}

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
    const response = await axios.get('http://localhost:5000/api/table');
    console.log(response.data)
    return response.data;
  });

  export const reserveSeat = createAsyncThunk(
    'tables/reserveSeat',
    async ({ tableNumber, seatNumber, name }) => {
      const response = await axios.post('http://localhost:5000/api/table/reserve', {
        tableNumber,
        seatNumber,
        name,
      });
      return { tableNumber, seatNumber, name, success: response.data.success };
    }
  );

  const tableSlice = createSlice({
    name:"table",
    initialState,

    reducers: {},

    
  extraReducers: (builder) => {
    builder
      .addCase(fetchTables.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(reserveSeat.fulfilled, (state, action) => {
        const { tableNumber, seatNumber, name, success } = action.payload;
        if (success) {
          const table = state.tables.find((t) => t.tableNumber === tableNumber);
          const seat = table.seats.find((s) => s.seatNumber === seatNumber);
          seat.isReserved = true;
          seat.reservedBy = name;
        }
      });
  }
  

  })

  export default tableSlice.reducer

