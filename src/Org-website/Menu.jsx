import React from 'react';
import { NavLink } from 'react-router-dom';
import './Org.scss';
const Menu = () => {
    return (
        <>
            <nav className="main-navbar">
                <div className="container">
                <img src="https://directorypakistan.com/wp-content/uploads/job-manager-uploads/company_logo/2020/02/Dan-Logo-2.jpg" alt="" className='image' />
                    <ul>
                        <li><NavLink className=" btn-group-lg" activeClassName="menu-active" to="/Home" id="nav-items"  >home</NavLink></li>
                        <li><NavLink className=" btn-group-lg" activeClassName="menu-active" to="/About" id="nav-items" >about</NavLink></li>
                        <li><NavLink className=" btn-group-lg" activeClassName="menu-active" to="/Services" id="nav-items" >Services</NavLink></li>
                        <li><NavLink className=" btn-group-lg" activeClassName="menu-active" to="/Contact" id="nav-items" >Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Menu;