import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQS from './components/FAQ/FAQS';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Home/Navigation';
import About from './components/About/About';
import Events from './components/Events/Events';

const App = () => {
  return (    
    <BrowserRouter>    
      <Navigation />
      <Routes>
        <Route path='home' element={<Home />} />        
        <Route path='FAQS' element={<FAQS />} />
        <Route path='Events' element={<Events />} />
        <Route path='About' element={<About />} />
      </Routes>

  </BrowserRouter>
  )
}

export default App;


