import React, { useState } from 'react'
import {FaHome, FaUser, FaBook, FaServicestack, FaPhone  } from "react-icons/fa";
import {RiServiceLine} from 'react-icons/ri';
const Navbar = () => {
  const [activeNav, setactiveNav] = useState('#');   //We use this to keep the tag active whenever we click on the a tag
  return (
    <>
    <div className="nav-container">
    <nav className="navbar">
      <a href="#" className={activeNav === '#' ? 'active' : ""} > <FaHome /> </a>
      <a href="#About" onClick={()=> setactiveNav('#About')} className={activeNav === '#About' ? 'active' : ""} > <FaUser /> </a>
      <a href="#Experience" onClick={()=> setactiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ""}  > <FaBook /> </a>
      <a href="#Services"  onClick={()=> setactiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ""}   > <RiServiceLine /> </a>
      <a href="#Contact"  onClick={()=> setactiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ""}  > <FaPhone /> </a>
    </nav>
    </div>
    </>
  )
}

export default Navbar;