import React from 'react'
import Input from './Input'
import './Header.css'
import SigninButton from './Signinbutton'
import More from './More'
import Carts from './Carts'
import Menu from './Menu'
import {Link} from "react-router-dom"

export class Header extends React.Component {
    render() {
        return (
            <div>
               
                <div className='background'>

                    <div className='head'>
                    <div className='esearch'>
                    <Link to='/'><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" className='fliplogo' alt='fliplogo' height='55px' width="220px"/></Link>
                    </div> 
                    <Menu />
                    <div class='input'>
                    <Input />
                    </div>
                    </div>

                    <div className='fight'>
                    <div><SigninButton /></div>
                    <div> <More /></div>
                    <div> <Carts /></div>
                  </div>

                </div>

            </div>
        )
    }
}

export default Header
