import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardsItem: [],
    // qty: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    add: (state, action) => {
      const itemIndex = state.cardsItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cardsItem[itemIndex].qty += 1;
      } else {
        const tempProduct = { ...action.payload, qty: 1 };
        state.cardsItem.push(tempProduct);
      }
    },

    remove: (state, action) => {
      return {
        ...state,
        cardsItem: state.cardsItem.filter((item) => item.id !== action.payload),
      };
    },

    // increment to cart
    incrementQty: (state, action) => {
      state.cardsItem = state.cardsItem.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: parseInt(item.qty) + 1 }
          : { ...item, qty: item.qty }
      );
    },

    // decrement to cart
    decrementQty: (state, action) => {
      state.cardsItem = state.cardsItem.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      );
    },

    // qty to cart
    // qtyprice: (state, action) => {
    //   state.cartItems = state.cartItems.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, qty: item.qty * item.price }
    //       : item
    //   );
    // },
  },
});

export const { add, remove, incrementQty, decrementQty, qtyprice } =
  cardSlice.actions;

export default cardSlice.reducer;
