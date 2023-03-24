import React from 'react'
// import './Recipe.scss';
const RecipeCard = ({data}) => {
  return (
    <>
      <section className="container recipe__card-container">
      {
          data.map((currele)=>{
        const{id, name, category, description, Image, price} = currele;
        return(
            <>

          <div className="cards"  >
              <div className="card">
               <small className='id'> {id} </small>
               <h2 className='category' > {category}  </h2>  
                <h4 className='name' > {name} </h4>
                <small className="price"> price {price} </small>
                <p> {description} </p>
                <img src={Image} alt="my-image" />
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

export default RecipeCard;