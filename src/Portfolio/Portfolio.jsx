import React, {useState} from 'react';
import PortfolioApi from '../Component/PortfolioApi';
// import img1 from '../assets/portfolio1.png';
// import img2 from '../assets/portfolio2.jpg';
// import img3 from '../assets/portfolio3.jpg';
// import img4 from '../assets/portfolio4.jpg';
// import img5 from '../assets/portfolio5.jpg';
// import img6 from '../assets/portfolio6.jpg';
const Portfolio = () => {
  const [Portfolio, setPortfolio] = useState(PortfolioApi);
  return (
    <>

       <section id="Portfolio">
          <h5> My recent Work </h5>
          <h2> Portfolio </h2>
          <div className="container portfolio__container">
          {
          Portfolio.map((currele)=>{
         return(
           <>
   
       <article className="portfolio__item" key={currele.id}>
         <div className="portfolio__item-image">
         <img src={currele.image} alt="  " />
         </div>
         <h3> {currele.heading3} </h3>
         <a href="https://github.com/" className='btn item_cta'  > Github </a>
         <a href="https://dribbble.com/signup/new" className='btn btn-primary item-cta' > Live demo </a>
       </article>
           </>
         )
          })
          }
          </div>
       </section>
    </>
  )
}

export default Portfolio;