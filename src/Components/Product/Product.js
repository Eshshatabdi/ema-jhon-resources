import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, ratings, price, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings} star</small></p>

            </div>
            <button className='button-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;