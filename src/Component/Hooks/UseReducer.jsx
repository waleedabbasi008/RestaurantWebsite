import React, { useState, useEffect, useReducer } from 'react';
const reducer = (state, action)=>{
        if(action.type === "increment"){
           state = state+1;
        }
        if(state>0 && action.type === "decrement"){
           state = state-1;
        }
        return state;
}

const UseReducer = () => {
    const initialData = 2;
   const[state, dispatch] = useReducer(reducer, initialData); //Take two arguments initialdata and reducer initial data is the current value of the state and dispatch donot change the value of the state
  return (
    <>

<section className="incdec d-flex justify-content-center align-items-center" style={{background:"#333",height:"75vh", width:"100%", border:"2px solid red"}}>
     <div className="container-pro">
     <span style={{color:"#fff", textAlign:"center", marginLeft:"47px"}} > Count: </span>
     <p className='para fw-bold flex-sm-grow-1 red' style={{color:"red", textAlign:"center"}}>   {state} </p><br /><br />
      <button className='btn btn-outline-success' style={{marginRight:"30px", width:"50px"}}  onClick={()=>dispatch({type:"increment"})}>+</button>
      
      </div><button className='btn btn-outline-danger' style={{marginRight:"30px", width:"50px"}} onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </section>
    </>
  )
}

export default UseReducer;