import React, { useState } from "react";
 import './index.scss';
 import { NavLink } from "react-router-dom";
//  import web from '../src/images/logo.png';
 
 
 
 import {FaAddressBook, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaWhatsappSquare } from 'react-icons/fa';
 import {GoThreeBars} from 'react-icons/go';
 
 

const Menu = ()=>{
    const [mediaIcon, setmediaIcon] = useState(false);
        return(
        <>
        {/* <div className="container">
        <div className="text">
        <NavLink className="a" exact to='/Home'> Home </NavLink> 
        <NavLink className="a" exact to='/About'> AboutUs </NavLink> 
        <NavLink className="a" exact to='/Contact/number/telephone' > ContactUs </NavLink> 
        <NavLink className="a" exact to='/Services' > Services </NavLink> 
        {/* <NavLink className="a" exact to='/User/muhammad/waleed/abbasi' > User </NavLink> 
        <NavLink className="a" exact to = '/Search' > Demo </NavLink> */} 
    {/* 
     */}
 
     <nav class="navbar">
        <div class="container">
            {/* <img src={} alt="logo" className="logo" /> */}
            <ul>
                <li><NavLink  activeClassName = "menu-active" to="/ImagesGallery/GalleryImage" id="nav-items"  >home</NavLink></li>
                <li><NavLink  activeClassName = "menu-active" to="/Component/Hooks/UseState" id="nav-items" >about</NavLink></li>
                <li><NavLink activeClassName = "menu-active" to="/Photography" id="nav-items" >photography</NavLink></li>
                <li><NavLink activeClassName = "menu-active" to="/Contact" id="nav-items" >contact</NavLink></li>
                <li><NavLink  activeClassName = "menu-active" to="/Decoration" id="nav-items" >dcoration</NavLink></li>
                <li><NavLink  activeClassName = "menu-active" to="/EventPlace" id="nav-items" >event-place</NavLink></li>
                <li><NavLink  activeClassName = "menu-active" to="/decoration" id="nav-items" >dcoration</NavLink></li>
                <li><a  href="https://web.facebook.com/RiwayatEvents143" id="nav-items" > <FaFacebookSquare /> </a></li>
                <li><a  href="https://www.instagram.com/waleedabbasi008/" id="nav-items" > <FaInstagramSquare /> </a></li>
                <li><a  href="https://www.youtube.com" id="nav-items" > <FaYoutubeSquare /> </a></li>
                <li><a  href="https://web.whatsapp.com" id="nav-items" > <FaWhatsappSquare /> </a></li>
                <div className="Hamburger-Menu">
                <li><NavLink onClick={()=>{
                setmediaIcon(!mediaIcon);    
                }}  activeClassName = "menu-active"  id="nav-items" style={{width:'25px'}}  > <GoThreeBars /> </NavLink></li>
                </div>

                
            </ul>
      
        </div>
    </nav>
    {/* ######################### Mobile menu navbar ######################### */}
    <div className= {mediaIcon ? "container-RN-sd mobile-menu-active" :  "container-RN-sd"}>
 <ul>
 
               
                <li><NavLink  activeClassName = "mobile-menu-active" to="/Home" id="nav-items"  >home</NavLink></li>
                <li><NavLink  activeClassName = "mobile-menu-active" to="/About" id="nav-items" >about</NavLink></li>
                <li><NavLink activeClassName = "mobile-menu-active" to="/Photography" id="nav-items" >photography</NavLink></li>
                <li><NavLink activeClassName = "mobile-menu-active" to="/Contact" id="nav-items" >contact</NavLink></li>
                <li><NavLink  activeClassName = "mobile-menu-active" to="/Decoration" id="nav-items" >dcoration</NavLink></li>
                <li><NavLink  activeClassName = "mobile-menu-active" to="/EventPlace" id="nav-items" >event-place</NavLink></li>
                <li><NavLink  activeClassName = "mobile-menu-active" to="/decoration" id="nav-items" >dcoration</NavLink></li>
                <div className="socialMedia">
                <li><a  href="https://web.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011078%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAkfucBhBBEiwAFjbkryzgc8Q8VlKX0qpUUIamYV1nv4c6XjibacfZ-iaAB1paZIP_PhEGmRoCVasQAvD_BwE&_rdc=1&_rdr" id="nav-items" > <FaFacebookSquare /> </a></li>
                <li><a  href="https://www.instagram.com/waleedabbasi008/" id="nav-items" > <FaInstagramSquare /> </a></li>
                <li><a  href="https://www.youtube.com" id="nav-items" > <FaYoutubeSquare /> </a></li>
                </div>
                
                
            </ul>
            </div>


        </>
    )
};
export default Menu;