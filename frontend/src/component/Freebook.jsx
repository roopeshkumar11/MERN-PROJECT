import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from "axios"
import { useState ,useEffect} from 'react';

function Freebook() {

  const [book,setbook]=useState([])
useEffect(()=>{
  const getbook=async()=>{
    try{
      const res=await axios.get(`${window.location.origin}/book`)
      console.log(res.data.filter((data)=>data.category==="Free"))
      setbook(res.data.filter((data)=>data.category==="Free"))

    }
    catch(error){
      console.log(error)
    }
  }
  getbook()
},[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   


  
  
  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='font-semibold text-xl-1 pb-2'>Free offer Course</h1>
       <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quae consequuntur! Magni similique accusamus, quae voluptate ea sunt perferendis esse expedita ipsa est alias nesciunt eius qui nisi ut atque pariatur, vero reprehenderit? Consequatur, adipisci soluta...</p>
    </div>
    
    <div className="">
      <Slider {...settings}>
       {book.map((item)=>(
        <Card  item={item} key={item.id}/>
       ))}
       
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook