import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Recipee from './pages/Recipee';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSlider from './components/HomeSlider';
import PopularMenu from './components/PopularMenu/PopularMenu';
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Recipee />
      <Menu />
      <Contact />
      <Footer />
    </>
  )
}

export default App;