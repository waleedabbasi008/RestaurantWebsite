import React from 'react'
import './Event.scss';
const EventCard = ({event}) => {
  return (
    <>
     <section className="Services d-flex justify-content-between flex-wrap p-5 w-75 m-auto">
                {
                    event.map((currentEle) => {
                        console.log(currentEle);
                        const {id, name, description, price, image} = currentEle;
                        return (
                            <>
                                <div className="container m-auto w-25  h-50"  key={id}>
                                    <div className="card-container">
                                        <div className="card-body border-dark">
                                            <p className="id card-number card-circle subtile"> {id}  </p>
                                            <h2 className="heading-title card-author subtile"> {name} </h2>
                                            <p className="description card-description subtile"> {description} </p>
                                            <p className="price "> {price} </p>

                                        </div>
                                        <img src={image} alt="Images" className='image w-90' />
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

export default EventCard