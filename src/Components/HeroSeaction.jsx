import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import LinearProgress from "@mui/material/LinearProgress";
import { parathaGet } from "../Fuetures/Paratha/parathaSlice";

const HeroSeaction = () => {
  const { paratha, isLoading } = useSelector((state) => state.paratha);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parathaGet());
  }, []);

  if (isLoading) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress color="inherit" />
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" sx={{ ml: 2, mt: 2, fontWeight: "bold" }}>
        Popular Dishes
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        <hr />
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 gap-20 mt-10 justify-around items-center">
        {paratha.map((para) => (
          <CardItem key={para.id} para={para} />
        ))}
      </div>
    </>
  );
};

export default HeroSeaction;
