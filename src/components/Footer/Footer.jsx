import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { LuMapPin } from 'react-icons/lu';
import { AiOutlineMail, AiOutlineCopyright } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
const footerQuickLinks = [
    {
        display: 'Terms & Conditions',
        url: "#",
    },
    {
        display: 'Privacy Policy',
        url: "#",
    },
    {
        display: 'Return and Refund',
        url: "#",
    },
    {
        display: 'Payment Method',
        url: "#",
    },
]
const footerLinks = [
    {
        display: 'About Us',
        url: "#",
    },
    {
        display: 'Menu',
        url: "#",
    },
    {
        display: 'Recipee',
        url: "#",
    },
    {
        display: 'Contact US',
        url: "#",
    },
]
const Footer = () => {
    return (
        <>
            <section className="footer">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className="d-flex align-items-center gap-1 mb-4">
                                    <span> <RiRestaurant2Fill />  </span> {"  "}  Chef Waleed's food
                                </h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in aliquam inventore sunt hic cum, tempora consectetur et quis esse, numquam eveniet aut. Eaque, unde. </p>
                            </div>




                        </Col>
                        <Col lg='2' md='4' sm='6' >
                            <h5 className="footer__link-title">
                                Quick links
                            </h5>
                            <ListGroup>
                                {
                                    footerQuickLinks.map((item, index) => {
                                        return (
                                            <>
                                                <ListGroupItem className='link__item' key={index}>
                                                    <a href={item.url}> {item.display} </a>

                                                </ListGroupItem>
                                            </>
                                        )
                                    })
                                }

                            </ListGroup>


                        </Col>
                        <Col lg='2' md='4' sm='6' >
                            <h5 className="footer__link-title">
                                Info  links
                            </h5>
                            <ListGroup>
                                {
                                    footerLinks.map((item, index) => {
                                        return (
                                            <>
                                                <ListGroupItem className='link__item' key={index}>
                                                    <a href={item.url}> {item.display} </a>

                                                </ListGroupItem>
                                            </>
                                        )
                                    })
                                }

                            </ListGroup>


                        </Col>
                        <Col lg='4' md='4' sm='6'  >
                            <h5 className="footer__link-title"> Contact  </h5>
                            <ListGroup>
                                <ListGroupItem className=' d-flex align-item-center gap-3 link__item'>
                                    <span> <LuMapPin />  Islamabad, Pakistan </span>
                                </ListGroupItem>
                                <ListGroupItem className=' d-flex align-item-center gap-3 link__item'>
                                    <span> <AiOutlineMail />  waleedabbasi840@gmail.com </span>
                                </ListGroupItem>
                                <ListGroupItem className=' d-flex align-item-center gap-3 link__item'>
                                    <span> <BiPhoneCall />  +923170542307 </span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12' >
                            <p className='text-center'> copyright <AiOutlineCopyright /> 2023, developed by Waleed abbasi </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;