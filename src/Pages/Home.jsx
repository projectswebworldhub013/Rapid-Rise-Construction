import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default Home
