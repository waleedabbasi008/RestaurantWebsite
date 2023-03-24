import React from 'react'
import './Redux.scss';
const ReduxApp = () => {
  return (
    <>
<div className="container">
        <h1> Increment/ decrement counter </h1>
        <h4> usign react and redux </h4>
        <div className="quantity">
          <a href="#" title='decrement' className="quantity-minus quantity"> <span> - </span> </a>
          <input type="text" name='quantity' className="quantity-input" />
          <a href="#" className="quantity-plus quantity" title='increment' > <span> + </span> </a>
        </div>
      </div>

    </>
  )
}

export default ReduxApp;