import React from 'react'
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import sliderData from '../assets/fake-data/slider';
import '../app.scss'
const HomeSlider = () => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

      };
    return (
        <>
            <Container className='silder__container'>
                <Slider className='slider'  {...settings}>
                    {
                        sliderData.map((item) => {

                            return (

                                <>
                                    <div className="slider__wrapper d-flex justify-content-between align-items-center pt-5 " key={item.id}>
                                        <div className="slider__content w-50 ps-2">
                                            <h2> {item.title} </h2>
                                            <p> {item.desc} </p>
                                            <button className="btn btn-primary"> Explore food </button>


                                        </div>
                                        <div className="slider__img w-50">
                                            <img src={item.imgUrl} alt="" className='w-100' />
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                </Slider>
            </Container>   
        </>
    )
}

export default HomeSlider;            