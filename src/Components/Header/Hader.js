import React from 'react';
import logo from '../../images/Logo.svg';
import './Hader.css';

const Hader = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>

        </nav>
    );
};

export default Hader;