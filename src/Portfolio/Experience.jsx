import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import {RxCrossCircled} from 'react-icons/rx';
const Experience = () => {
  return (
    <>
    <section id="Experience">

  <h5 className=' text-center' > What skills i have ? </h5>
  <h2 className=' text-center' > My experience </h2>
  <div className="container experience__container">
    <div className="experience__frontend">
       <h3> Frontend Development </h3>
       <div className="experience__content">
         <article className='experience__detail' >  
          <BsPatchCheckFill  className = "experience__detail-icon"/>
         <div>
          <h4> HTML </h4>
          <small className='text-light' > Experienced </small>  </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
          <div><h4> Css </h4>
          <small className='text-light' > Intermediate </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> Javascript </h4>
          <small className='text-light' > Intermediate </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> Bootstrap </h4>
          <small className='text-light' > Experienced </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
          <div><h4> Tailwind </h4>
          <small className='text-light' > Intermediate </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> React js </h4>
          <small className='text-light' > Experienced </small> </div>
          </article>
       </div>
    </div>
    <div id="experience__backend">
       <h3> Backend Development </h3>
       <div className="experience__content">
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> MongoDB </h4>
          <small className='text-light' > basic </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> PHP </h4>
          <small className='text-light' > Basic </small> </div>
          </article>
         <article className='experience__detail' > 
          <BsPatchCheckFill className = "experience__detail-icon" />
         <div> <h4> My sql </h4>
          <small className='text-light' > Basic </small> </div>
          </article>
         <article className='experience__detail' > 
          <RxCrossCircled  className = "experience__detail-icon pyt"/>
         <div> <h4 className=''> Python </h4>
          <small className='text-light pyt-name' > Basic </small> </div>
          </article>
       </div>
    </div>
  </div>

</section>

    </>
  )
}

export default Experience;