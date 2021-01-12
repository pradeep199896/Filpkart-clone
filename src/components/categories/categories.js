import React from 'react'
import {Link} from 'react-router-dom'
import './categories.css'

export class Categories extends React.Component {

    state={
        data:[],
        upper:[]
    }

    async componentWillMount(){
        let data=await fetch(`https://fakestoreapi.com/products/category/${this.props.match.params.category}`)
        let response=await data.json()
        // console.log(response)
        let upper=response.map((val)=>{
            return (val.category.toUpperCase())
        })
        // console.log("upper"+upper)
        // console.log(upper[0]+upper[1])
        this.setState({
            data:response,
            upper:upper
        })
    }
    render() {
        // console.log(this.props.match.params.category)
        // console.log(this.state.data)
        console.log("bigg"+this.state.upper)
        let elects=this.state.data.map((value,index)=>{
            return (
                <div className='properties'>
                <h2><b>{value.title}</b></h2>
                <Link to={`/products/${value.id}`}>
                <img src={value.image} key={index} alt='img'/>
                <div className="bigger">
                <h3><b>Rs.{value.price}</b></h3>
                <h3>{value.description}</h3>
               
                </div></Link>
                  </div>
                  )
           
        })

        return (
            <div>
                 <div className="back">
                   <Link to="/" ><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="pen"/></Link>
                </div>
            <div className="electronics">
                {<h1>{this.state.upper[0]}</h1>}
               {elects} 
            </div>
            </div>
        )
    }
}

export default Categories
