import React from 'react'
import './restaurant.scss';
const RestaurantCard = ({menu}) => {
  // console.log(menu);
  return (
    <>
    <section className="card-section">
    {
      menu.map((currEle)=>{
        const {id, name, category, image, description} = currEle;   //Destructuring used when you dont have to repeat same piece of code 
        return(
          <>
          <div className="card-container"  >
        <div className="card " key={id}>
            <div className="card-body border-dark">
                <span className='card-number card-circle subtile' > {id}  </span>
                <span className="card-author subtile"> {name} </span>
                <h2 className="card-title"> {category} </h2>
                <span className="card-description subtile"> {description} </span>
                <div className="card-read"> Read </div>
            </div>
            <img src={image} alt= "image" className="card-media w-90" />
            <span className="card-tag subtile"> Order now </span>
        </div>
    </div>
    </>
        )
      })
    }
   
    
</section>
    </>
  )
}

export default RestaurantCard