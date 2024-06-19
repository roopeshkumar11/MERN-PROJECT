import React from 'react'
import Navbar from '../component/Navbar'
import About from '../component/About'
import Footer from '../component/Footer'

function Aboutlayout() {
  return (
   <>
   <Navbar/>
   <div className="">  <About/></div>
  
   <Footer/>
   
   </>
  )
}

export default Aboutlayout