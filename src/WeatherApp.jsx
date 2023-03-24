import React, { useState } from "react";
import './index.scss';
import { FaStreetView } from "react-icons/fa";
const WeatherApp = ()=>{
    const[city,setcity] = useState(null);
    const[search, setsearch] = useState("Lahore")
return(
    <>
<div className="Wcontainer">
    <div className="Winputdata">
        <input type="search" className="WinputField" onChange= {(event)=>{
        }} />

    </div>
<div className="Info">
    <h2 className="location"  > <FaStreetView />   {city} </h2> 
    <h1 className="temp">
   5.25 Cel
    </h1>
    <h3 className="tempmin-max" >   </h3>
</div>
</div>
    </>
)
}
export default WeatherApp;