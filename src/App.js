import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

import { useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Home/Footer';
import FAQS from './components/FAQ/FAQS';


function App() {
  return (
    <>
      <Header></Header>
      <Footer />
    </>
  );
}

export default App;