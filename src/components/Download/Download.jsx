import React from 'react'
import appImg from '../../assets/images/app.png';
import { Container, Row, Col } from 'reactstrap';
import '../../app.scss';
import {AiOutlineApple} from 'react-icons/ai';
import {BsGooglePlay} from 'react-icons/bs';
const Download = () => {
    return (
        <>
            <section>
                <Container className='app__container'>
                    <Row>
                        <Col lg='6' md='12' >
                            <div className="app__img">  
                                <img src={appImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='6' md='12' >
                            <div className="app__content">
                                <h5> Download our app </h5>
                                <h2> Never Feel hungary! Download our mobile app to order delicious food </h2>
                                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum non dolor architecto exercitationem, quibusdam iure voluptatibus magnam. Dolore, incidunt temporibus! </p>
                                <div className="app__btns">
                                    <button className="btn__apple ml-3">
                                        <a href=""> <AiOutlineApple />  Apple store </a>                                        
                                    </button>
                                    <button className="btn__google">
                                    <a href=""> <BsGooglePlay /> Google Play </a>                                       
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Download;