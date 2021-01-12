import React from 'react'
import{Link} from 'react-router-dom'
import './Signbutton.css'
class SigninButton extends React.Component{
  render()
  {
    return(
      <div>
       <Link to="/signin"><button className="signin">Signin</button></Link>
      </div>
    )
  }
}
export default SigninButton