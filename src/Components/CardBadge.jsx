import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import AddToCard from "../Page/AddToCard";
import {
  decrementQty,
  incrementQty,
  remove,
} from "../Fuetures/AddToCart/CardSlice";
import { Link } from "react-router-dom";

const CardBadge = () => {
  const { cardsItem } = useSelector((state) => state.card);

  // const [value, setValue] = useState(1);
  const [count, setCount] = useState(cardsItem.qty);

  console.log(cardsItem.qty);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  const total = cardsItem.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const tax = (total * 10) / 100;

  const delevery = (total * 5) / 100;

  const totalPrice = total + tax + delevery;

  const final = total;

  const cardTotal = cardsItem.reduce((p, c) => {
    return p + c.qty * c.price;
  }, 0);
  // const increment = () => {
  //   setValue(value + 1);
  // };

  // const decrement = (id) => {
  //   if (value > 1) {
  //     setValue(value - 1);
  //   }
  // };

  //  const increment = (card) => {
  //   dispatch(incrementQty(card + 1 ));
  //  }

  const handleincreament = (card) => {
    dispatch(incrementQty(card));
    setCount(count + 1);
  };

  const handleDecrement = (card) => {
    dispatch(decrementQty(card));
    setCount(count > 1 ? count - 1 : 1);
  };

  //  console.log(qty)

  const custStyle = {
    width: "60%",
  };

  // console.log(cardsItem);
  return (
    <>
      <>
        <Typography variant="h4" id="" margin={2}>
          CART
        </Typography>
        <Typography variant="body1" id="method" margin={2}>
          1.CART <HorizontalRuleOutlinedIcon /> 2. CHECKOUT{" "}
          <HorizontalRuleOutlinedIcon /> 3.PAYMENT
        </Typography>
        <Grid container spacing={8} sx={{ padding: "0px 30px" }}>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            {cardsItem?.map((card) => (
              <div class="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative mt-4 ">
                <div class="flex items-center max-sm:flex-col gap-4">
                  <div class="w-52 shrink-0">
                    <img src={card.img} class="w-full h-full object-contain" />
                  </div>
                  <div class="sm:border-l sm:pl-4">
                    <h3 class="text-xl font-extrabold text-[#333]">
                      {card.name}
                    </h3>
                    <ul class="mt-4 text-sm text-[#333] space-y-2">
                      <li>{card.description}</li>
                      <li style={{fontWeight:"bold"}} >Price : ₹{card?.price*card?.qty}</li>
                     
                    </ul>
                    <hr class="my-6" />
                    <div class="flex items-center justify-between flex-wrap gap-4">
                      <div class="flex items-center gap-4">
                        <h4 class="text-base font-bold text-[#333]">Qty:</h4>
                        <button
                        onClick={() => handleDecrement(card)}
                          type="button"
                          class="bg-transparent py-2 font-semibold text-[#333]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 fill-current"
                            viewBox="0 0 124 124"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                        >
                          {card?.qty}
                        </button>
                        <button
                        onClick={() => handleincreament(card)}
                          type="button"
                          class="bg-transparent py-2 font-semibold text-[#333]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 fill-current"
                            viewBox="0 0 42 42"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center">
                        <svg
                         onClick={() => handleDelete(card.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 absolute top-3 right-3"
                          viewBox="0 0 320.591 320.591"
                        >
                          <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              // <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
              //   <CardMedia
              //     sx={{ height: 140 }}
              //     image={card?.img}
              //     title="green iguana"
              //   />
              //   <CardContent>
              //     <Typography gutterBottom variant="h5" component="div">
              //       Name : {card?.name}
              //     </Typography>
              //     <Typography variant="h5">Price : ₹{card?.price*card?.qty}</Typography>
              //     <Typography sx={{display : "flex" , alignItems : "center" , justifyContent : "center"}} >
              //       <Button onClick={() => handleDecrement(card)}>
              //         <RemoveIcon />
              //       </Button>
              //       {card?.qty}
              //       <Button onClick={() => handleincreament(card)}>
              //         <AddIcon />
              //       </Button>
              //       <Button>
              //         <DeleteOutlineIcon
              //          
              //           color="error"
              //         />
              //       </Button>
              //     </Typography>
              //   </CardContent>
              // </Card>
            ))}
            {/* <CardItem/> */}
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Your Total: ₹{final}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Discount
                </Typography>
                <Typography variant="h6" gutterBottom>
                  tax : ₹{tax}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Delevery charge : ₹{delevery}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  total Amount : ₹{totalPrice}
                </Typography>
                <Link to={"/check"}>
                  <Button variant="contained" color="warning">
                    CHECKOUT
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default CardBadge;
