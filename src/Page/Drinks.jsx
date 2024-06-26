import { Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Fuetures/AddToCart/CardSlice";

const Drinks = ({ drin }) => {
  const dispatch = useDispatch();

  const handleSubmit = (card) => {
    dispatch(add(card));
  };

  return (
    <>
      <div className="flex place-content-around">
        <div className="card-burger carts-1 px-5 pb-5 flex flex-col items-center justify-center">
          <img className="cart-item-img pt-5" src={drin?.img} />
          <div className="px-5 pb-5">
            <div className="mt-4">
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
            <a href="#">
              <h5 className="text-xl text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
                {drin?.name}
              </h5>
            </a>
            <div className="flex items-center justify-around mt-5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white card-item-price">
                ₹{drin?.price}
              </span>

              <div className="btns">
                <button
                  className="btn circle border "
                  onClick={() => handleSubmit(drin)}
                >
                  <a href="#" className="font-medium text-2xl">
                    <AddShoppingCartRoundedIcon />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drinks;
