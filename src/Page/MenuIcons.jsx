import React from 'react'
import image1 from "../assets/icons-1.png"
import image2 from "../assets/icons-2.png"
import image3 from "../assets/icons-3.png"
import image4 from "../assets/icons-4.png"
import image5 from "../assets/icons-5.png"
import { Typography } from '@mui/material'

const MenuIcons = () => {
  return (
    <>
        <Typography variant='h5' sx={{ ml: 2 , mt: 2 , fontWeight : "bold" }} >Category</Typography>
        <Typography variant='h5' sx={{ mt: 2 , fontWeight : "bold" }} ><hr /></Typography>
        <div className='flex place-content-around' >
            
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mt-10'>
                <div className='border' >
                    <img className='' src={image1} alt="" />
                </div>
                <div className='border'>
                    <img  src={image2} alt="" />
                </div>
                <div className='border'>
                    <img src={image3} alt="" />
                </div>
                <div className='border'>
                    <img src={image4} alt="" />
                </div>
                <div className='border'>
                    <img src={image5} alt="" />
                </div>
                <div className='border'>
                    <img src={image5} alt="" />
                </div>
            </div>
       
        </div>
    </>
  )
}

export default MenuIcons