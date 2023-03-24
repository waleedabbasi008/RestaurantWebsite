import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './Portfolio/Header';
import About from './Portfolio/About';
import Testimonial from './Portfolio/Testimonial';
import Contact from './Portfolio/Contact';
import Experience from './Portfolio/Experience';
import Navbar from './Component/Navbar';
import Footer from './Portfolio/Footer';
import Portfolio from './Portfolio/Portfolio';
import './Portfolio/Portfolio.scss';
import Services from './Portfolio/Services';
import PortfolioApi from './Component/PortfolioApi';
const PortfolioApp = () => {
  
  return (
    <>
   
 <Header />
 <Navbar />
 <About />
 <Experience />
 <Services />
 <Portfolio  />
 <Testimonial />
 <Contact />
 <Footer />
    </>
  )
}

export default PortfolioApp;