import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exportDrink from "./drinkServer";

const drinkSlice = createSlice({
  name: "drink",
  initialState: {
    drink: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(drinkGet.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.isMessage = "";
      })
     .addCase(drinkGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.drink = action.payload;
        state.isError = false;
        state.isMessage = "";
      })
     .addCase(drinkGet.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isMessage = "";
      });
  },
});


export default drinkSlice.reducer;



export const drinkGet = createAsyncThunk("GET/DRINK" , async () => {
    try {
      return await exportDrink.getDrinks();
    } catch (error) {
      console.log(error);
    }
  
})
