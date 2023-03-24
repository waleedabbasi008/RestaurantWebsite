import React, { useState } from 'react';
import TestimonialApi from '../Component/TestimonialApi';
import img1 from '../assets/Avatar.jpg'
import img2 from '../assets/Avatar2.jpg'
import img3 from '../assets/Avatar3.jpg'
import img4 from '../assets/Avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = () => {
  const [test, settest] = useState(TestimonialApi);
  return (
    <>

<section id="Testimonial">
  <h5> Review from clients </h5>
  <h2> Testimonial </h2>
  <Swiper className="container testimonial__container" 
  // Install swiper module
   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    pagination={{ clickable: true }}>
  {
    test.map((currele)=>{
      return (
      <>

      <SwiperSlide className="testimonial"  >
      <div className="client__avatar">
        <img src={currele.image} alt="Mickle " />
      </div>
      <div className="client__reviews-detail">
        <h5> {currele.name} </h5>
        <small className="review"> {currele.review} </small>
        </div>
    </SwiperSlide>
      </>  
      )
    })
  }
  </Swiper>
</section>
    </>
  )
}

export default Testimonial;