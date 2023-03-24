import React, { useState } from 'react';
import axios from 'axios';
import {BiStreetView} from 'react-icons/bi';
const Weather = () => {
    // const Api = https://api.openweathermap.org/data/2.5/weather?={Islamabad}&appid={4449cf509b0a2218c53a59df31fb327f}
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Mumbai")
  return (
    <>
    <div className="weather__container">
     <div className="weather__data">
         <input type="search" className='inputField' onChange={(event)=>{
           
         }} />
     </div>
  
    </div>
    <div className="info">
        <h2 className='location' >  Islamabad  </h2>
        <span className='Icon' > <BiStreetView />  </span>
        <h1 className="temp">  </h1>
        <h3 className='tempmin_max' > max: | 21 Min:| 10 </h3>
    </div>
    <div className="wave -one"> </div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </>
  )
}

export default Weather;