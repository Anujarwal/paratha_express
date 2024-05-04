import { configureStore } from "@reduxjs/toolkit";
import parathaReducer from "./Paratha/parathaSlice";
import burgerReducer from "./Burger/BurgerSlice";
import pizzaReducer from "./Pizza/PizzaSlice";
import drinkReducer from "./Drinks/DrinkSlice";
import cardReducer from "./AddToCart/CardSlice"

const store = configureStore({
  reducer: {
    paratha: parathaReducer,
    burger: burgerReducer,
    pizza: pizzaReducer,
    drink: drinkReducer,
    card : cardReducer,
  },
});

export default store;
