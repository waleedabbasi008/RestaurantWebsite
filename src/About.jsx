import React from "react";
import './index.scss'
import AboutApi from "./AboutApi";
import AboutApi2 from "./AboutApi2";
import web from '../src/images/AboutImage2.jpg';
import web1 from '../src/images/bg-about.jpg';
import web2 from '../src/images/AboutImage3.jpg';
import web3 from '../src/images/AboutImage4.jpg';
const About = ()=>{
    return (
        <> 
                 <header id="about-header">
        <div class="container-home">
       <div class="container-text txt-light">
                
            <h1 className="about-heading text-lg-start " > About Us  </h1>
            

            </div>

        </div>
    </header>
    <section id="about-section">
        <AboutApi image2 = {web1} />
        <AboutApi2 image = {web} />
        <AboutApi image2 = {web2} />
        <AboutApi2 image = {web3} />
    </section>

    
 
         </>
    )
}
export default About;