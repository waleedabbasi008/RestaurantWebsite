import React from 'react'
import {BsCheck2} from 'react-icons/bs';
const Services = () => {
  return (
    <>
     <section id="Services">
         <h5> What i Offer </h5>
         <h2> Services </h2>
         <div className="container services__container">
         <article className="service">
             <div className="service__head">
                 <h3> UI/UX Design </h3>
             </div>
             <ul className='service__list' >
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
             </ul> 
         </article>
         {/* End of the UI/UX */}
         <article className="service">
             <div className="service__head">
                 <h3> Web development </h3>
             </div>
             <ul className='service__list' >
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
             </ul> 
         </article>
         {/* End of Web development */}
         <article className="service">
             <div className="service__head">
                 <h3> Content creation </h3>
             </div>
             <ul className='service__list' >
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
                 <li> <BsCheck2 className='service__list-icon' />  <p> Lorem ipsum dolor sit amet.</p> </li>
             </ul> 
         </article>

         </div>
     </section>
    </>
  )
}

export default Services