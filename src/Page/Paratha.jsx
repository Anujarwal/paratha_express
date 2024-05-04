import { Rating, Stack, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import React from "react";
import { useDispatch } from "react-redux";
import { addparathas } from "../Fuetures/Paratha/parathaSlice";
import { add } from "../Fuetures/AddToCart/CardSlice";

const Paratha = ({ para }) => {
  const dispatch = useDispatch();
  // console.log(para)
  const handleSubmit = (card) => {
    dispatch(add(card));
  };
  return (
    <>
      <div className="flex place-content-around">
        <div className="card-burger carts-1 px-5 pb-5 flex flex-col items-center justify-center">
          <img className="cart-item-img pt-5" src={para?.img} />
          <div className="px-3 pb-5">
            <div className="mt-4 flex items-center justify-center ">
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
            <a href="#">
              <h5 className="text-xl text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
                {para?.name}
              </h5>
            </a>
            <div className="flex items-center justify-around mt-5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white card-item-price">
                ₹{para?.price}
              </span>

              <div className="btns">
                <button className="btn circle border " onClick={() => handleSubmit(para)} >
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

export default Paratha;
