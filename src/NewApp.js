import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Routes, Route} from 'react-router-dom';
import Menu from './Org-website/Menu';
import Home from './Org-website/Home';
import About from './Org-website/About';
import Contact from './Org-website/Contact';
import Services from './Org-website/Services';
import Login from './Org-website/Login';
import './Org-website/Org.scss';
const NewApp = () => {
  return (
    <>
<Menu />
<Routes>
<Route exact path='/Login' element = { <Login />} />
<Route exact path='/Home' element = {<Home />} /> 
<Route exact path='/About' element = {<About />} /> 
  <Route exact path='/Services' element = {<Services />} />
  <Route exact path='/Contact' element = {<Contact />} />  
</Routes>
    


    </>
  )
}

export default NewApp;