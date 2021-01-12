import React from 'react'
import{Link} from 'react-router-dom'
import ls from "local-storage"
import Info from './Empty'
import './SingleData.css'


export class SingleData extends React.Component {
   state={
       info:{}
   }
    async componentWillMount(){
        console.log(this.props)
         let data=await fetch(`https://fakestoreapi.com/products/${this.props.match.params.product_id}`)
         let response=await data.json()
       
        if(!(ls.get("CartDetails"))){
            ls.set("CartDetails",JSON.stringify(Info))
        }
        
        //  console.log(response)
         this.setState({
             info:response
         })
    }
    addDetails=()=>{
        console.log(this.state.info)
    let data=ls.get("CartDetails")
    let rap=JSON.parse(data)
    rap.push(this.state.info)
    ls.set("CartDetails",JSON.stringify(rap))
    if(ls.set("CartDetails",JSON.stringify(rap)))
    {
        alert("Added to Cart")
    }
    
    }
    render() {
        return (
            <div>
                <div className="back">
                   <Link to="/" ><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="pen"/></Link>
                </div>
                <div className="empty"></div>
                <div className="single1">
                <h1><b>{this.state.info.title}</b></h1>
            
                <img src={this.state.info.image} key={this.state.info.id} alt='img'/>
                <div className="bigger1">
                
                <h3>{this.state.info.description}</h3>
                <h3><b><span className="pc"><i>Price:</i></span><span className="price">₹.{this.state.info.price}</span></b></h3>
               
                
                </div>
                <Link to="/cart"><button onClick={this.addDetails} className="cart">ADD CART</button></Link>
                </div>
                
            </div>
        )
    }
}

export default SingleData
