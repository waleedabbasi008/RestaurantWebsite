import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { popularMenuFood } from '../../assets/fake-data/products';
import ProductCard from '../ProductCard/ProductCard';
import '../../app.scss';
const PopularMenu = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'  >
                            <h2> Popular food menu </h2>
                        </Col>
                        {
                            popularMenuFood.map((item) => {
                                return (
                                    <>
                                        <Col lg='3' md = '6' key={item.id} >
                                              <ProductCard item = {item} />
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PopularMenu;