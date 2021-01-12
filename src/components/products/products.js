import React from 'react'
import {Link} from 'react-router-dom'
import './products.css'
import logo1 from './img0.png'
import logo2 from './img1.png'
import logo3 from './img2.png'
import logo4 from './img3.png'
export class products extends React.Component {
    state={
        products:[],
        categories:[]
    }
   
async componentWillMount(){
   
        let data=await fetch('https://fakestoreapi.com/products/categories');
        let response=await data.json()
        let caps=response.map((value,index)=>{
            return value.toUpperCase()
        })
       
        this.setState({
            products:caps,
            categories:response
        })
        console.log(this.state.products)
        console.log(this.state.categories[1])
}

    render() {
       
        return (
            <div>
                <div className="products">
                <Link to={`/category/${this.state.categories[0]}`}> <div><img src={logo1} alt='alt'/><h3>{this.state.products[0]}</h3></div></Link>
                  <Link to={`/category/${this.state.categories[1]}`}><div><img src={logo2} alt='alt'/><h3>{this.state.products[1]}</h3></div> </Link>
               <Link to={`/category/${this.state.categories[2]}`}> <div><img src={logo3} alt='alt'/><h3>{this.state.products[2]}</h3></div></Link>   
                 <Link to={`/category/${this.state.categories[3]}`}> <div><img src={logo4} alt='alt'/><h3>{this.state.products[3]}</h3></div></Link>
                   
                </div>
                
            </div>
        )
    }
}

export default products
