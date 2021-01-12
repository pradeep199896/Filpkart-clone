import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from '../src/components/Home/Home'
import Categories from "./components/categories/categories";
import SingleData from "./components/SingleData/SingleData";
import Signin from "./components/Signin/Signin"
import SignUp from "./components/Signup/SignUp"
import Cart from "./components/Cart/Cart"

export class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/category/:category" component={Categories} />
        <Route exact path="/products/:product_id" component={SingleData} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={Cart} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
