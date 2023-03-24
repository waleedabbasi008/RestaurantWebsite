import React from 'react'
import { NavLink } from 'react-router-dom';
const NavCompo = () => {
  return (
    <>
     <nav className="navbar">
         <div className="menu-icon">
             <ul className="navbar-list">
                 <li> <NavLink exact to = "/" > Home  </NavLink> </li>
                 <li> <NavLink exact to = "/About" > About  </NavLink> </li>
                 <li> <NavLink exact to = "/Services" > Services  </NavLink> </li>
                 <li> <NavLink exact to = "/Contact" > Contact  </NavLink> </li>
             </ul>
         </div>
     </nav>
    </>
  )
}

export default NavCompo;