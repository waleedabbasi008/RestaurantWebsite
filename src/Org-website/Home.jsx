import React from 'react'
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const home = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="container-text">
          <h1 className='heading'> Don't Limit Yourself to learning  </h1>
          <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Suscipit tempora <br /> illum odit odio vel voluptates <br /> sunt velit nulla. <br /> Ipsum, ipsa.</p>
           <NavLink to='/About' className="btn btn-primary btn-outline-secondary"> More about us </NavLink>
        </div>
      </div>
    </section>

    </>
  )
}

export default home