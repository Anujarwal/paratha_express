import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exportPizza from "./pizzaServer";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizza: [],
    pizzas : [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: "",
  },

  reducers: {

    addPizzas : (state , action) =>{
      return{
        ...state,
        pizzas : action.payload , ...state.pizzas
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(pizzaGet.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.isMessage = "";
      })
      .addCase(pizzaGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pizza = action.payload;
        state.isError = false;
        state.isMessage = "";
      })
      .addCase(pizzaGet.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});


export const {addPizzas} = pizzaSlice.actions;
export default pizzaSlice.reducer;

export const pizzaGet = createAsyncThunk("GET/PIZZA", async () => {
  try {
    return await exportPizza.getPizza();
  } catch (error) {
    console.log(error);
  }
});
