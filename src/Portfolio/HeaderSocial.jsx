import React from 'react';
import { FaGithubSquare, FaLinkedin, FaDribbbleSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <>
      <div className="header__socials">
          <a href=" https://linkdin.com " target="_blank"> <FaLinkedin /> </a>
          <a href=" https://github.com " target="_blank"> <FaGithubSquare />  </a>
          <a href=" https://dribble.com " target="_blank"> <FaDribbbleSquare /> </a>
      </div>  
  
    </>
  )
}

export default HeaderSocial;