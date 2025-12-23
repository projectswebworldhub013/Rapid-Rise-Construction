import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navar'
import Footer from './Components/Footer'
import About from './Pages/About'
import ServiceDetail from './Pages/ServiceDetail'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
