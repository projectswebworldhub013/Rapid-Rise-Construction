import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navar'
import Footer from './Components/Footer'
import About from './Pages/About'
import ServiceDetail from './Pages/ServiceDetail'
import ProjectDetail from './Pages/ProjectDetail'
import FloatingButtons from './Components/FloatingButtons'
const App = () => {
  return (
    <div>
      <FloatingButtons/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
