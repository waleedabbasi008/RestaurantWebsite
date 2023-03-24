import React from 'react';

const Category = (props, catItems) => {
  return (
    <>
            <h1 className='mt-5 text-center main-Heading ' > Order Your Favourite Dish </h1>
    <hr />
   <div className=' menu-tabs container   '  > 
   <div className=' menu-tab d-flex justify-content-around ' >
   {catItems.map((currele)=>{
    <button className='btn btn-warning' onClick={()=>props.filterItem(currele)} > {currele} </button>  //shortcut for adding all buttons
   })}
   {/* <button className='btn btn-warning' onClick={()=>props.filterItem('breakfast')} > BreakFast </button>
   <button className='btn btn-warning' > Lunch </button>
   <button className='btn btn-warning' > Evening </button>
   <button className='btn btn-warning' > Dinner </button>
   <button className='btn btn-warning' > All </button>
   <button className='btn btn-warning' > Time Pass </button> */}

   </div>
    </div>
    </>
  )
}

export default Category