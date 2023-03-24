import React from 'react'
import mine from '../assets/waleed.jpg';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa'
const About = () => {
  return (
    <>
      <section id="About">
        <h5> Get two Know </h5>
        <h2> About Me </h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={mine} alt="MY-About-Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">

                <i className='about__card-icon' > <FaAward /> </i>
                <h5> Experience </h5>
                <small> fresh Graduate having 1 year experience in React js </small>
              </article>
              <article className="about__card">

                <i className='about__card-icon' > <FaUsers /> </i>
                <h5> Clients </h5>
                <small> 20+ clients </small>
              </article>
              <article className="about__card">

                <i className='about__card-icon' > <FaFolder /> </i>
                <h5> Projects </h5>
                <small> 20+ projects completed </small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet mollitia aspernatur quos nam, totam pariatur dolores, ab error expedita officiis itaque ratione nisi maxime esse eos. Eos, nisi ad?
            </p>
            <a href="#Contact" className='btn btn-primary'> Contact us </a>
          </div>
        </div>


      </section>

    </>
  )
}

export default About;