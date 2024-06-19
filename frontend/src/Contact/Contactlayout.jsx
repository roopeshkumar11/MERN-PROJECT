import React from 'react'
import Contact from '../component/Contact'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function Contactlayout() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">  <Contact/></div>
   
    <Footer/>
    
    </>
  )
}

export default Contactlayout