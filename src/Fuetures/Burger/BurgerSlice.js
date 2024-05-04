import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exportburger from "./BurgerServer";

const burgerSlice = createSlice({
  name: "Burger",
  initialState: {
    burger: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(burgerGet.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.isMessage = false;
      })
      .addCase(burgerGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.burger = action.payload;
        state.isError = false;
        state.isMessage = false;
      })
      .addCase(burgerGet.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default burgerSlice.reducer


export const burgerGet = createAsyncThunk("GET/BURDER", async () => {
    try {
      return await exportburger.getBurger();
    } catch (error) {
      console.log(error);
    }
  })