import React, { useState } from 'react'
import ContactApi from '../Component/ContactApi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_27862', 'template_u99u5pd', form.current, 'user_HlVSf-C8o7SCagUkh');
      e.target.reset();
    };
  const [data, setdata] = useState(ContactApi);
  return (
    <>
     <section id="Contact">
       <h5> Get in touch </h5>
       <h2> Contact Me </h2>
       <div className="container contact__container" >
         <div className="contact__options">
         {
           data.map((currele)=>{
             return (
               <>
           <article className="contact__option">
           <p className='contact__option-icon' > {currele.icon} </p>
           <h4> {currele.name} </h4>
           <h5> {currele.username} </h5> 
           <a href={currele.link} target="_blank" className=' text-decoration-none' > Send a message  </a>
           </article>
               </>
             )
           })
         }
          
         </div>
         {/* end of the contact options */}
         <form onSubmit={sendEmail} >
           <input type="text" name='name' placeholder='Your full name' required  />
           <input type="email" name='email' placeholder='Your email' required />
           <textarea name=" message "  rows="7" required></textarea>
           <button type='submit' className='btn btn-primary m-auto'>  Submit </button>
         </form>
       </div>
     </section>

    </>
  )
}

export default Contact;