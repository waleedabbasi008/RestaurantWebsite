import React, { useState } from 'react'
import EventApi from '../Component/EventApi'
import EventCard from './EventCard';
import './Event.scss';
const uniqueList = [ ...new Set( EventApi.map((currEle)=>{
    return currEle.name;
}))]

const Event = () => {
    const [event, setevent] = useState(EventApi);
    const [eventList, seteventList] = useState(uniqueList);
    const filteritems = (name)=>{
        const updatedItems = EventApi.filter((currEle)=>{
            return currEle.name === name;
        })
        setevent(updatedItems);
        }
    return (
        <>
        <nav className="navbar">
        {
            eventList.map((currEle)=>{
                return(
                    <>
                    <button className="btn btn-group btn-dark" onClick={()=> filteritems(currEle)} >  {currEle}   </button>
                    </>
                )
            })
        }

          
        </nav>
           <EventCard event = {event} />

        </>
    )
}

export default Event