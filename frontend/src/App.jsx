import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Course from './component/Course'
import Courses from './course/Courses'
import Sign from './component/Sign'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/Authprovider'


import Aboutlayout from './About/Aboutlayout'
import Contactlayout from './Contact/Contactlayout'



function App() {
  const [authuser,setauthuser]=useAuth()
  return (
    
      <>
      <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={authuser?<Courses/>:<Navigate to="/sign"/>}></Route>
      
      <Route path='/about' element={authuser?<Aboutlayout/>:<Navigate to="/sign/"/>}></Route>
      <Route path='/contact' element={authuser?<Contactlayout/>:<Navigate to="/sign/"/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
      
    
    </Routes>
    <Toaster/>
  </div>
      
      </>
  )
}

export default App