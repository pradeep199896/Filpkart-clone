import React from 'react'
import {Link} from 'react-router-dom'
import './Carts.css'

export class Carts extends React.Component {
    render() {
        return (
            <div className='carto'>
            <Link to="/cart"> <button><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart iamge" width="50px" height="50px"/></button>
              <p><span className="hit"><b>Cart</b></span></p></Link> 
            </div>
        )
    }
}

export default Carts
