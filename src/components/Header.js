import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQS from './FAQ/FAQS'
import FileNotFound from './Home/FileNotFound'
import Footer from './Home/Footer'; 
import Events from './Events/Events'
import Home from './Home/Home'
import About from './About/About'
import  Raise from  './Raise/Raise'
import Navigation from './Home/Navigation'

const Header = () => {
  return (    
    <BrowserRouter>    
      <Navigation />
      <Routes>
        <Route path='Home' element={<Home />} />        
        <Route path='events' element={<Events/>} />
        <Route path='FAQS' element={<FAQS />} />
        <Route path='About' element={<About />} />
        <Route path='Raise' element={<Raise />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default Header