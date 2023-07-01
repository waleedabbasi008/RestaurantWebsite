import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../ProductCard/ProductCard';
import { fastFoodProducts, riceMenuProducts, dessertProducts, pizzaProducts, coffeeProducts, } from '../../assets/fake-data/products';
import '../../app.scss';
const MenuPack = () => {
    const [filter, setFilter] = useState('Fast-food');
    const [products, setproducts] = useState(fastFoodProducts);
    useEffect(() => {
        if (filter === 'Rice-menu') {
            setproducts(riceMenuProducts);
        }
        if (filter === 'Fast-food') {
            setproducts(fastFoodProducts);
        }
        if (filter === 'Desert-menu') {
            setproducts(dessertProducts);
        }
        if (filter === 'Pizza') {
            setproducts(pizzaProducts);
        }
        if (filter === 'Coffee') {
            setproducts(coffeeProducts);
        }

    }, [filter])
    return (
        <>
            <section>
                <Container>
                    <Row >
                        <Col lg='12'>   <h3 className=' mb-5 menu-title'> Our menu pack </h3> </Col>
                        <Col lg='12' className='text-center mb-4 ' >

                            <button className={`filter-btn ${filter === 'Fast-food' ? 'active-btn' : ''}`} onClick={() => setFilter('Fast-food')}> Fast Food </button>
                            <button className={`filter-btn ${filter === 'Rice-menu' ? 'active-btn' : ''}`} onClick={() => setFilter('Rice-menu')}> Rice menu </button>
                            <button className={`filter-btn ${filter === 'Pizza' ? 'active-btn' : ''}`} onClick={() => setFilter('Pizza')}> Pizza </button>
                            <button className={`filter-btn ${filter === 'Desert-menu' ? 'active-btn' : ''}`} onClick={() => setFilter('Desert-menu')}> Desserts </button>
                            <button className={`filter-btn ${filter === 'Coffee' ? 'active-btn' : ''}`} onClick={() => setFilter('Coffee')}> Coffee </button>

                        </Col>
                        {
                            products.map((item) => {
                                return (
                                    <>
                                        <Col lg='3' sm='6' key={item.id} className='mb-5 mt-5'> <ProductCard item={item} /> </Col>
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

export default MenuPack;