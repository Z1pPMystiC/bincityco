import React from 'react'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePage />
      <Footer />
    </>
  )
}

export default Home