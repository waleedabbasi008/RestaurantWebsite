import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../app.scss';
import pastaImg from '../../assets/images/pasta.png';
import { TbTruckDelivery } from 'react-icons/tb';
import {AiFillDollarCircle} from 'react-icons/ai';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {Tb24Hours} from 'react-icons/tb';
const ChooseUs = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={pastaImg} alt="" className='w-100' />
                        </Col>
                        <Col lg='6' >
                            <div className="choose__content">
                                <h4 className='text-center'> Who we are? </h4>
                                <h2> Take a look at the benwfits we offer you </h2>
                                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum impedit ipsum quaerat doloribus, dolores aut. </p>

                            </div>
                            <div className="features">
                                <div className="feature1 d-flex justify-content-between align-items-center gap-4">
                                    <div className="single__feature">
                                        <span className=' fs-1' style={{color:"#f5b70a"}} > <TbTruckDelivery /> </span>
                                        <h6 style={{color:"#f5b70a"}}> Free home delivery </h6>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                    <div className="single__feature-two">
                                        <span className=' fs-1' style={{color:"#f5b70a"}} > <AiFillDollarCircle /> </span>
                                        <h6 style={{color:"#f5b70a"}}> Return and refund </h6>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                                <div className="feature1 d-flex justify-content-between align-items-center gap-4">
                                    <div className="single__feature-three">
                                        <span className=' fs-1 feature-icon-3 ' style={{color:"#f5b70a"}} > <RiSecurePaymentFill  /> </span>
                                        <h6 style={{color:"#f5b70a"}}> Secure Payment </h6>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                    <div className="single__feature-four">
                                        <span className=' fs-1' style={{color:"#f5b70a"}} > <Tb24Hours /> </span>
                                        <h6 style={{color:"#f5b70a"}}> 24/7 available </h6>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ChooseUs;