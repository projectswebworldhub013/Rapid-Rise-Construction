import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navar'
import Footer from './Components/Footer'
import About from './Pages/About'
import ServiceDetail from './Pages/ServiceDetail'
import ProjectDetail from './Pages/ProjectDetail'
import FloatingButtons from './Components/FloatingButtons'
import ScrollToTop from './Components/ScrollToTop'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </div>
  )
}

export default App
