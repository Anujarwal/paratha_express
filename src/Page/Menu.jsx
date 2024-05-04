import { Button, Rating, Stack, Typography } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import React, { useEffect } from "react";
import Drinks from "./Drinks";
import Pizza from "./Pizza";
import Burger from "./Burger";
import Paratha from "./Paratha";
import { useDispatch, useSelector } from "react-redux";
import { burgerGet } from "../Fuetures/Burger/BurgerSlice";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { parathaGet } from "../Fuetures/Paratha/parathaSlice";
import { pizzaGet } from "../Fuetures/Pizza/PizzaSlice";
import FastfoodSharpIcon from "@mui/icons-material/FastfoodSharp";
import { drinkGet } from "../Fuetures/Drinks/DrinkSlice";

const Menu = () => {
  // const [value, setValue] = React.useState(5);
  const { drink } = useSelector((state) => state.drink);
  const { pizza } = useSelector((state) => state.pizza);
  const { burger } = useSelector((state) => state.burger);
  const { paratha } = useSelector((state) => state.paratha);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(drinkGet());
    dispatch(pizzaGet());
    dispatch(parathaGet());
    dispatch(burgerGet());
  }, [0]);

  return (
    <>
      <Typography variant="h5" sx={{ ml: 5, color: "orange" }}>
        {" "}
        <LocalDiningIcon sx={{ fontSize: 40, color: "orange" }} /> Paratha{" "}
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-20 mt-10 justify-around items-center">
        {paratha.map((para) => (
          <Paratha key={para.id} para={para} />
        ))}
      </div>
      <Typography variant="h5" sx={{ ml: 5, color: "orange", mt: 5 }}>
        {" "}
        <LunchDiningIcon sx={{ fontSize: 40, color: "orange" }} /> Burger{" "}
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-20 mt-10 justify-around items-center">
        {burger.map((bur) => (
          <Burger key={bur.id} bur={bur} />
        ))}
      </div>
      <Typography variant="h5" sx={{ ml: 5, color: "orange", mt: 5 }}>
        {" "}
        <LocalPizzaIcon sx={{ fontSize: 40, color: "orange" }} /> Pizza{" "}
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-20 mt-10 justify-around items-center">
        {pizza.map((piz) => (
          <Pizza key={piz.id} piz={piz} />
        ))}
      </div>
      <Typography variant="h5" sx={{ ml: 5, color: "orange", mt: 5 }}>
        {" "}
        <FastfoodSharpIcon sx={{ fontSize: 40, color: "orange" }} /> Drinks{" "}
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-20 mt-10 justify-around items-center">
        {drink.map((drin) => (
          <Drinks key={drin.id} drin={drin} />
        ))}
      </div>
    </>
  );
};

export default Menu;
