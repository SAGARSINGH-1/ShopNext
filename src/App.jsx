import { useState } from 'react'
import Navbar from './Components/Layout/Navbar'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Main from './Components/pages/Hero'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
