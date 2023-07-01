import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';
import { add } from '../../App/Features/MenuSlics';
import '../../app.scss';
import { useDispatch } from 'react-redux';
const ProductCard = (props) => {
    const {title, imgUrl, price} = props.item;
    const dispatch = useDispatch();
const addToCart = (data)=>{
    dispatch(add(props))
}
    return (

        <>
            <div className="single__product ">
                <img src={imgUrl} alt="" className='w-100' />

                <div className="product__content">
                    <div className="rating text-center mb-2">                
                        <span> <AiFillStar /> </span>
                        <span> <AiFillStar /> </span>
                        <span> <AiFillStar /> </span>
                        <span> <AiFillStar /> </span>
                        <span> <BiSolidStarHalf /> </span>
                    </div>
                    <h6> {title} </h6>
                    <div className=" d-flex align-items-center justify-content-between mt-2">
                        <span className='price'> price: $ <span> {price} </span> </span>
                        <span className='shoppingCartIcon' onClick={()=> addToCart}> <AiOutlineShoppingCart /> </span>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard