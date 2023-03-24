import React from 'react'
import './restaurant.scss';
const Navbar = ({filterItem, AllItems, menulist}) => {
  return (
    <>

<nav className="navbar">
      <div className="btn-group">
      {
          menulist.map((currEle)=>{
             return (
                 <>
                <button className="btn-group--item " onClick={()=>filterItem(currEle)} > {currEle} </button>
              
                </>
             )
          })
      }
        {/* <button className="btn-group--item" onClick={()=>filterItem('Breakfast')} > Breakfast </button>
        <button className="btn-group--item" onClick={()=>filterItem('Lunch')} > Lunch </button>
        <button className="btn-group--item" onClick={()=>filterItem('Evening')} > Evening </button>
        <button className="btn-group--item" onClick={()=>filterItem('Dinner')} > Dinner </button>
        {/* <button className="btn-group--item" onClick={AllItems} > All </button> */}
        <button className="btn-group--item" onClick={AllItems} > All </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar