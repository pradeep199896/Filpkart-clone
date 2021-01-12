import React from 'react'
import {Link} from 'react-router-dom'
import ls from 'local-storage'
import "./Cart.css"

export class Cart extends React.Component {
    state={
        values:[],
        total_price:0
    }
componentWillMount(){
    let hat=JSON.parse(ls.get("CartDetails"))
    let count=0;
    for(let i=0;i<hat.length;++i){
        count=hat[i].price+count
    }
    // console.log(typeof(hat))
    // console.log(hat)
    this.setState({
        values:hat,
        total_price:Math.floor(count)
    })
   
}
    render() {
        console.log(this.state.values[0])
        let jak=this.state.values.map((value,index)=>{
            return (
                <div>
            <div className="inner">
                <div className="imgset"><img src={value.image} key={value.id} alt='img'/></div>
             <div className="bigger2"> <h1><b>{value.title}</b></h1></div>
            <div className="bigger2">
            <h3><b><span className="pc1"><i>Price:</i></span><span className="price1">₹.{value.price}</span></b></h3>
            </div>
            </div>
            <div className="fun"></div>
            </div>
            )
        })
        return (
            <div>
                 <div className="back">
                   <Link to="/" ><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="pen"/></Link>
                </div>
                <div className="top">
                    <h1>Cart Details</h1>
                </div>
                 <div>
                     {jak}
                 </div>
                 <div className="diff"></div>
                 <div className="TotalPrice">
                     <h3 class="tprice">Total Price:</h3>
                     <h3 className="stprice">₹.{this.state.total_price}</h3>
                 </div>
            </div>
        )
    }
}

export default Cart
