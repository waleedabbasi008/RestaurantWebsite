import React, {useState} from 'react';
import { BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
     <section className="contact-head">
       <div className=".contact-container">
         <div className="contact-container-text">
           <h1 className='heading-contact'> Get in touch  </h1>
           <p className="contact-para"> Want to get in touch with us ? we'd love to hear that. her is the way that you can in touch with us </p>
         </div>
       </div>
     </section>
     <section className="contact-cards">
      <div className="card1-body">
       <p className="icon fs-26"> <BiPhoneCall /> </p>
       <p> Talk to say </p>
       <p> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo inventore nihil molestiae <br /> tempora unde nulla, modi veniam <br /> minima vero repellendus. </p>
       <p className="number" style={{color:"blue"}}> +923170542307 </p>
</div>
      <div className="card2-body">
       <span className="icon">    </span>
       <p> Talk to say </p>
       <p> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo inventore nihil molestiae <br /> tempora unde nulla, modi veniam <br /> minima vero repellendus. </p>
       <button className="btn btn-outline-secondary"> Contact support </button>
</div>
     </section>
    </>
  )
}

export default Contact;