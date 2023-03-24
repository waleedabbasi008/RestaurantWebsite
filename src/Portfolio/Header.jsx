import React, { memo } from 'react';
import CTA from './CTA';
import me from '../assets/me.png';
import HeaderSocial from './HeaderSocial';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Header = () => {
  return (
    <>
      <header>
        <div className="container .header__container">
          <h5> Hello i'm </h5>
          <h1> Waleed abbasi </h1>
          <h5 className="text-light"> FrontEnd developer </h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
            <img src={me} alt=" My image " className='my-image' />
          </div>
          <a href="#Contact" className='scroll__down text-decoration-none' > <AiOutlineArrowRight className=' fs-15' /> Scroll Down <AiOutlineArrowRight className=' fs-15' /> </a>
        </div>
      </header>
    </>
  )
}

export default Header;