import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {

  return (
    <div className='bg-gray-300 h-max'>
      <Header/>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
