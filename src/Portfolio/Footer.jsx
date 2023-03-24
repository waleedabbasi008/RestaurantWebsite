import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
    <footer>
      <a href="" className='footer__logo text-center fw-bolder' > Waleed </a>
      <ul className="permalinks">
        <li> <a href="#Home"> Home </a> </li>
        <li> <a href="#About"> About </a> </li>
        <li> <a href="#Experience"> Experience </a> </li>
        <li> <a href="#Services"> Services </a> </li>
        <li> <a href="#Portfolio"> Portfolio </a> </li>
        <li> <a href="#Testimonial"> Testimonial </a> </li>
        <li> <a href="#Contact"> Contact </a> </li>
      </ul>
      <div className="footer__social">
        <a href="https://facebook.com">  <BsFacebook /> </a>
        <a href="https://instagram.com">  <BsInstagram /> </a>
        <a href="https://twitter.com">  <BsTwitter /> </a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Waleed. All rights reserved </small>
      </div>
    </footer>
    </>
  )
}

export default Footer;