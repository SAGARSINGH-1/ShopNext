import { useState } from 'react'
import Navbar from './Components/Outlets/Navbar'
import Header from './Components/Outlets/Header'
import Footer from './Components/Outlets/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
