import React from 'react'
import './Cart.css'
import cart from './shopping-cart.png'

class Cart extends React.Component {
    render() {
        return (
            <img src={cart} alt="cart" id='cart'/>
        );
    }
}

export default Cart
