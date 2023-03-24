import React, { useReducer } from 'react'
const reducer = (state, action)=>{
 if(action.type === "increment"){
   state = state+1;    
 }
 if(state>0 && action.type === "decrement"){
   state = state-1;    
 }
     return state;
}
const UseReducerPractice = () => {
    const initData = 0;
    const [state, dispatch] = useReducer(reducer, initData);
  return (
    <>
    <p> {state} </p>
    <button className="btn btn-outline-primary" onClick={()=>dispatch({type:"increment"})} > + </button>
    <button className="btn btn-outline-primary" onClick={()=>dispatch({type:"decrement"})} > - </button>
    
    </>
  )
}

export default UseReducerPractice