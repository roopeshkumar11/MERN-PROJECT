import React from 'react'
import  Ban from "../../public/Banner.png"

function Banner() {
  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 flex flex-col md:flex-row my-10' >
        <div className="w-full md:w-1/2 mt-12 md:mt-32  order-2 md:order-1">
        <div className="space-y-12">
        <h1 className='text-4xl font-bold'>
            
            Hello,welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
        </h1>
        <p className='text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis adipisci quos tempore, eum maiores expedita modi nemo, minima quam reiciendis ad nisi excepturi dolorum cumque velit distinctio voluptates. Minus, eligendi.</p>
        </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2 ">
        <img
            src={Ban}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          /></div>
    </div>
    </>
  )
}

export default Banner