import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import FeaturesSection from './pages/FeaturesSection'
import SelfHelpSection from './pages/SelfHelpSection'
import TherapySection from './pages/TherapySection'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeProvider'


const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="light" storageKey="mindfuheal-theme">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <SelfHelpSection />
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
