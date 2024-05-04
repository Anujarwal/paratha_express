import { Button } from "@mui/material";
import React from "react";
import delivery from "../assets/deliveryBike.png";
import { Link } from "react-router-dom";

const Delevery = () => {
  return (
    <>
      <div className="about">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
          <div className="about-text mt-10 flex items-left justify-center flex-col  ">
            <h5 className="text-2xl text-amber-400 text-center ">Delivery</h5>
            <h4 className="text-4xl text-center ">
              Choose what you want, select a pick up time
            </h4>
            <p className="text-2xl text-center mt-3 text-gray-500  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
              dolores delectus tempora ad, dolorum deserunt, sequi saepe
              voluptatibus illo tempore soluta reprehenderit repellat ut amet a
              non nemo ducimus!
            </p>

            <Button
              size="large"
              color="warning"
              variant="outlined"
              sx={{ mt: 5 }}
            >
              <Link to="/menu">Orden Now</Link>
            </Button>
          </div>
          <div className="about-image mt-10 ">
            <img className="bike-image rounded-s-full " src={delivery} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Delevery;
