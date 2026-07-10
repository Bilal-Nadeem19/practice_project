import React from 'react'
import Hero from '../components/sections/home/Hero'
import KeyFeatures from '../components/sections/home/KeyFeatures'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import Industries from "../components/sections/home/Industries";
import HowItWorks from '../components/sections/home/HowItWorks'
import Pricing from '../components/sections/home/Pricing'
import Testimonials from '../components/sections/home/Testimonials'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <KeyFeatures/>
      <WhyChooseUs/>
      <Industries />
      <HowItWorks/>
      <section id='pricing'>
        <Pricing />
      </section>
      <Testimonials/>
    </div>
  )
}

export default App