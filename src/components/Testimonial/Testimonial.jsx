import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import testimonialImg from '../../assets/images/review1.png';
const Testimonial = () => {
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
            <section>
                <Container>
                    <Row className='TestRow'>
                        <Col lg='6' >
                            <h2> What our Customers saying </h2>
                            <Slider {...settings}>
                                <div>
                                    <div className="single__Testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident incidunt facere! Obcaecati, necessitatibus nulla et magni enim ratione cumque eos non aut excepturi tenetur qui, voluptatibus esse consectetur tempore quis impedit illum fugit voluptatum! Et repudiandae quas esse iste porro quaerat, accusamus aut placeat distinctio pariatur ipsum impedit? Nulla.

                                        </p>
                                        <h6> Muhammad Usman </h6>
                                        <p> Web developer </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="single__Testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident incidunt facere! Obcaecati, necessitatibus nulla et magni enim ratione cumque eos non aut excepturi tenetur qui, voluptatibus esse consectetur tempore quis impedit illum fugit voluptatum! Et repudiandae quas esse iste porro quaerat, accusamus aut placeat distinctio pariatur ipsum impedit? Nulla.

                                        </p>
                                        <h6> Majid Ali </h6>
                                        <p> Web developer </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="single__Testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident incidunt facere! Obcaecati, necessitatibus nulla et magni enim ratione cumque eos non aut excepturi tenetur qui, voluptatibus esse consectetur tempore quis impedit illum fugit voluptatum! Et repudiandae quas esse iste porro quaerat, accusamus aut placeat distinctio pariatur ipsum impedit? Nulla.

                                        </p>
                                        <h6> Toqeer Ahmed </h6>
                                        <p> Web developer </p>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                        <Col lg='6' className='d-flex align-items-center' >
                            <img src={testimonialImg} alt="" className='w-75 image' style={{ marginTop: "1rem" }} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testimonial;