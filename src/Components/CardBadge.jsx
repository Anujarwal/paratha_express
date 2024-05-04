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
              <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={card?.img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name : {card?.name}
                  </Typography>
                  <Typography variant="h5">Price : ₹{card?.price}</Typography>
                  <Typography marginLeft={"100px"}>
                    <Button onClick={() => handleDecrement(card)}>
                      <RemoveIcon />
                    </Button>
                    {card?.qty}
                    <Button onClick={() => handleincreament(card)}>
                      <AddIcon />
                    </Button>
                    <Button>
                      <DeleteOutlineIcon
                        onClick={() => handleDelete(card.id)}
                        color="error"
                      />
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
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
