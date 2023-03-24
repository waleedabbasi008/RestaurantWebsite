import React, { useState } from 'react'

const UseState = () => {
    const [state, setstate] = useState(0);
    const increment = ()=>{
    setstate(state+1);
    }
  return (
    <>

<section className="incdec d-flex justify-content-center align-items-center" style={{background:"#333",height:"75vh", width:"100%", border:"2px solid red"}}>
     <div className="container-pro">
     <span style={{color:"#fff", textAlign:"center", marginLeft:"47px"}} > Count: </span>
     <p className='para fw-bold flex-sm-grow-1 red' style={{color:"red", textAlign:"center"}}>   {state} </p><br /><br />
      <button className='btn btn-outline-success' style={{marginRight:"30px", width:"50px"}}  onClick={increment}>+</button>
      {/* <button className='btn btn-outline-danger' style={{marginRight:"30px", width:"50px"}} onClick={() => dispatch({ type: 'decrement' })}>-</button> */}
      </div>
      </section>
    </>
  )
}

export default UseState;