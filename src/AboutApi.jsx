import React from "react";
import './index.scss';

const AboutApi = (props)=>{
return(
    <>
        <div className="container">
            <div className="section-image">
           <img  src={props.image2} alt = "about image" />

            </div>
            <div className="section-text">
                <h1>  EventPlanner Since 2014 </h1>
                <p> Rafy Events is a wedding planning platform with a <br /> team of highly skilled event planners, art & creative <br /> directors who have notched up over 10 years of experience being the helpful <br /> hand that brides and grooms never knew that they needed; from personalised <br /> typeface for invitations to co-ordinating entertainers and caterers on the big day <br /> to contingency planning, Rafy Events will take care of every single little <br /> detail. 

Choose our services and <br /> leave your wedding planning in the <br /> very best hands, leaving you absolutely relaxed <br /> to enjoy the best day of your lives! </p>
            </div>

        </div>
    
    </>
)
}
export default AboutApi;