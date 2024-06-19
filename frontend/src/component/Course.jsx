import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from "axios"



function Course() {
const [book,setbook]=useState([])
useEffect(()=>{
  const getbook=async()=>{
    try{
      const res=await axios.get(`${window.location.origin}/book`)
      console.log(res.data)
      setbook(res.data)

    }
    catch(error){
      console.log(error)
    }
  }
  getbook()
},[])


  return (
   <><div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 item-center justify-center text-center">
      <h1 className='text-2xl font-sembold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!</span></h1>
      
    <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iste asperiores mollitia non atque quo sit sed tempore amet blanditiis ipsum maxime deserunt sunt sequi recusandae ipsa corrupti, nostrum quasi.</p>
   
    <Link to="/">
      <button className='bg-pink-500 text-white px-4 rounded-md hover:bg-pink-700 duration-300 mt-5 p-2'>Back</button> </Link>
    </div>
    <div className='mt-4 grid grid-cols-1 md:grid-cols-4 '>
      {book.map((item)=>(
        <Card id={item.id} item={item}/>
      ))}
    </div>
   </div>
  
   </>
  )
}

export default Course