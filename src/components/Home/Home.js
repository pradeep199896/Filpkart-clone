import React from 'react'
import Header from '../navbar/Header'
import Carosal from '../corosal/carsoal'
import Products from '../products/products'

export class Home extends React.Component {
  render() {
    return (
      <div>
     <Header />
        <Carosal />
        <Products />

      </div>
    )
  }
}

export default Home