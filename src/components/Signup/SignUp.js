import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import ls from 'local-storage'
import Information from './Data'
import "./SignUp.css"

export class SignUp extends React.Component {
    state={
        username:"",
        email:"",
        password:"",
        repassword:"",
        move:""
    }
    componentWillMount(){
      
      if(!(ls.get("userData")))
        {ls.set("userData",JSON.stringify(Information))
       }

    }
  
    Change=(e,some)=>{
       let stateCopy={}
        stateCopy[some]=e.target.value;
        this.setState(stateCopy)
        console.log(this.state)
        
    }
    handleClik=(e)=>{
        let re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(this.state.username) || !(this.state.email) || !(this.state.password) || !(this.state.repassword))
        {
            alert("Please fill the details")
        }
        else if(!re.test(this.state.email)){
           alert("Check email format")
        }
        else if(!(this.state.password===this.state.repassword)){
            alert("Check Password Again")
        }
       else 
       { 
           let amt=JSON.parse(ls.get("userData"))
           amt.push({"email":this.state.email,"password":this.state.password,"username":this.state.username})
           console.log(amt)
           ls.set("userData",JSON.stringify(amt))
           this.setState({
            username:"",
            email:"",
            password:"",
            repassword:"",
            move:true

           })
           if(ls.set("userData",JSON.stringify(amt)))
           {
               alert("Signup sucessful")
           }
          
       }

    }
    render() {
        if(this.state.move){
return <Redirect to="/" />
        }
        return (
            <div className="geo">
                <div className="back">
                   <Link to="/" ><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="pen"/></Link>
                </div>
                <div className="sup">
                    <h1>SignUp</h1>
                    <p className="para">User Name:</p>
                    <input type="text" value={this.state.username} onChange={(e)=>{this.Change(e,"username")}} placeholder="Enter username"/><br></br><br></br>
                    <p className="para">Email:</p>
                    <input type="email" value={this.state.email} onChange={(e)=>{this.Change(e,"email")}} placeholder="Enter Email"/><br></br><br></br>
                    <p className="para">Password</p>
                    <input type="password" value={this.state.password} onChange={(e)=>{this.Change(e,"password")}} placeholder="Password"/><br></br><br></br>
                    <p className="para">Re-enter Password</p>
                    <input type="password" value={this.state.repassword}  onChange={(e)=>{this.Change(e,"repassword")}} placeholder="Re-enter Password"/><br></br><br></br>
                    <button onClick={this.handleClik } className="login">Create Account</button><br></br><br></br>
                </div>

            </div>
        )
    }
}

export default SignUp
