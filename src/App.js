import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import JoinUs from './components/JoinUs'
import MissionAndVision from './components/MissionAndVision'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import OurProducts from './components/OurProducts'
import OurStory from './components/OurStory'

import './App.css'

function App() {
  return (
    <React.Fragment>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <OurStory />
        <OurProducts />
        <MissionAndVision />
        <JoinUs />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default App;
