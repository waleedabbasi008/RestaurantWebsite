import React from 'react'
import { NavLink } from 'react-router-dom';
import NavCompo from './NavCompo';
const Header = () => {
  return (
    <header>
        <NavLink exact to = '/' >  
         <img src=" ./images/waLogo.jpg " alt="" />
          </NavLink>
          <NavCompo />      
    </header>
  )
}

export default Header;