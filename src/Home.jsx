import React from "react";
import './index.scss'
import {NavLink} from 'react-router-dom'
import Menu from "./Org-website/Menu";
import { Routes, Route } from "react-router-dom";
import Home from './Org-website/Home';
import About from './Org-website/About';
import Contact from './Org-website/Contact';
import Services from './Org-website/Services';
import {Routes, Route} from 'react-router-dom';
const Home = ()=>{
 return(
     <>
      <Menu />
      <Routes>
<Route exact path='/Home' element = {<Home />} /> 
<Route exact path='/About' element = {<About />} /> 
  <Route exact path='/Services' element = {<Services />} />
  <Route exact path='/Contact' element = {<Contact />} />  
</Routes>
         <header id="header">
        <div class="container-home">
       <div class="container-text txt-light">
                
                <h1> The <br /> Riwayat Events </h1>
                <p>We Create You <span class="  " style={{fontWeight:"bold", color:"pink" }} >Celebrate</span>  </p>
                <NavLink  to = "/About" className = "btn" > About Us  </NavLink>
            

            </div>

        </div>
    </header>
</>
 )
} 
export default Home;