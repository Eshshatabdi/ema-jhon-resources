import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    // 10% 
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax


    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grand Total:${grandTotal} </h3>

        </div>
    );
};

export default Cart;