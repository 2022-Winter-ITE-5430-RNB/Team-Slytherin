import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQS from './FAQ/FAQS'
import FileNotFound from './Home/FileNotFound'
import Footer from './Home/Footer';    
import Events from './Events/Events'
import About from './About/About'
import  Raise from  './Raise/Raise'
import Home from './Home/Home'
import Navigation from './Home/Navigation'
import Clinics from './Clinic/Clinics'
import ContactForm from './ContactForm';
import Clinics from './Clinic/Clinics'
import AdoptRequest from './Requests/AdoptRequest'
import AdoptDetails from './Adoption/AdoptDetails';
import Rehome from './Rehome/Rehome';

const Header = () => {
  return (    
    <BrowserRouter>    
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='FAQS' element={<FAQS />} />
        <Route path='Create' element={<AdoptRequest />} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='Events' element={<Events/>} />
        <Route path='PetDetails' element={<AdoptDetails/>} />
        <Route path='Contact' element={<ContactForm />} />
        <Route path='Clinics' element={<Clinics />} />
        <Route path='Rehome' element={<Rehome />} />
        <Route path='*' element={<FileNotFound />} />
        <Route path='About' element={<About />} />
        <Route path='Raise' element={<Raise />} />
      </Routes>
      <Footer />    
  </BrowserRouter>
  )
}

export default Header