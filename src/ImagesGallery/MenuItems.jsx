import React from 'react'

const MenuItems = (props) => {
  return (
    <>
         <div className="menu-item container-fluid mt-5">
        <div className="row">
            <div className="col-11 mx-auto">
                <div className="row my-5">
                {
        props.items.map((elem)=>{
     const {id, Image, name, price, description} = elem;
     return(
        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id} >
                        <div className="row item-inside ">
                            <div className="images col-12 col-md-12 col-lg-4">
                                <img src={Image} alt="{name}" className='image-fluid' />
                            </div>
                            {/* Menu description */}
                            <div className="col-12 col-md-12 col-lg-8">
                                <div className="main-title pt-4 pb-3">
                                    <h1> {id} {name} </h1>
                                    <p> {description} </p>
                                </div>
                                <div className="menu-price-book">
                                    <div className="price-book-divide d-flex justify-content-between ">
                                    <h1> {price}</h1>
                                    <a href="www.youtube.com">
                                    <button className="btn btn-primary"> Order Now </button>
                                    </a>

                                    </div>
                                    <p> Price may vary on selectes date </p>
                                </div>
                            </div>
                        </div>
                    </div>
     )
        })
                }
                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuItems