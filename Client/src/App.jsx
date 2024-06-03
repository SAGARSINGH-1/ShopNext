import { useState } from 'react'
import Navbar from './Components/Outlets/Navbar'
import Header from './Components/Outlets/Header'
import Footer from './Components/Outlets/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className=''>
      <Header />
      <Navbar />
      <div className='min-h-screen bg-white'>
        <Outlet />
      </div>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>

  )
}

export default App
