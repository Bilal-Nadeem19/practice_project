import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Hero from '../components/sections/home/Hero'
import KeyFeatures from '../components/sections/home/KeyFeatures'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import Industries from "../components/sections/home/Industries";
import HowItWorks from '../components/sections/home/HowItWorks'
import Pricing from '../components/sections/home/Pricing'
import Testimonials from '../components/sections/home/Testimonials'
import Footer from '../components/layouts/Footer'
const App = () => {
  return (
      <>
      <Navbar/>
      <Hero/>
      <KeyFeatures/>
      <WhyChooseUs/>
      <Industries />
      <HowItWorks/>
      <section id='pricing'>
      <  Pricing /></section>
      <Testimonials/>
      <Footer/>
      </>
  )
}

export default App
