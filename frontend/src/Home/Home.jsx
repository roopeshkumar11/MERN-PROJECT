import React from 'react'
import Navbar from "../component/Navbar.jsx"
import Banner from "../component/Banner.jsx"
import Freebook from "../component/Freebook.jsx"
import Footer from "../component/Footer.jsx"




function Home() {
  return (
<div className='sm:p-0 m-5'>
<div className="sm:m-0">
        <Navbar />
      </div>

<Banner/>
<Freebook/>
<Footer/>



</div>  )
}

export default Home