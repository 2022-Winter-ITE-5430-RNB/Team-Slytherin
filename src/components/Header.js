import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQS from './FAQ/FAQS'
import Events from './Events/Events'

import Home from './Home/Home'
import About from './About/About'
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
      </Routes>
        
  </BrowserRouter>
  )
}

export default Header