import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exportParatha from "./parathaServer";
// import exportParatha from "./parathaServer";

const parathaSlice = createSlice({
  name: "paratha",
  initialState: {
    paratha: [],
    parathas: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: "",
  },

  reducers: {
    addparathas: (state, action) => {
      return {
        ...state,
        parathas: [action.payload, ...state.parathas],
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(parathaGet.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.isMessage = "";
      })
      .addCase(parathaGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.paratha = action.payload;
        state.isError = false;
        state.isMessage = "";
      })
      .addCase(parathaGet.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});

export const { addparathas } = parathaSlice.actions;

export default parathaSlice.reducer;

export const parathaGet = createAsyncThunk("GET/PARATHA", async () => {
  try {
    return await exportParatha.getParatha();
  } catch (error) {
    console.log(error);
  }
});
