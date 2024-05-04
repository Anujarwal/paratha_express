import React from "react";
import indian from "../assets/paratha.making_image.png";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
 

  return (
   
      <div className='about' >

     <div className='grid sm:grid-cols-1 md:grid-cols-2 '>
     <div className='about-image mt-10 ' >
          <img className='rounded-s-full ' src={indian} alt="" />
      </div>

      <div className='about-text mt-10 flex items-left justify-center flex-col  ' >
          <h5 className='text-2xl text-amber-400 text-center ' >About Our Food</h5>
          <h1 className='text-5xl text-center ' >From Texas with American Love</h1>
          <p className='text-2xl text-center mt-3  text-gray-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero dolores delectus tempora ad, dolorum deserunt, sequi saepe voluptatibus illo tempore soluta reprehenderit repellat ut amet a non nemo ducimus!</p>

          <Button size="large" color='warning' variant="outlined" sx={{ mt: 5 }}  ><Link to="/menu">Orden Now</Link></Button>
      </div>
     </div>
      </div>
  );
};

export default About;
