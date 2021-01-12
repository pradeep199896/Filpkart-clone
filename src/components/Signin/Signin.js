import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import ls from 'local-storage'
import './Signin.css'

export class Signin extends  React.Component {
    state={
        email:"",
        password:"",
        isLogin:false,
        info:[]
    }
    componentWillMount(){
    let rest=ls.get("userData")
    let result=JSON.parse(rest)
    // console.log(result)
    this.setState({
        email:"",
        password:"",
        isLogin:false,
        info:result
    })
    
    }
    Check=(e,name)=>{
        // console.log(this.state.info)
       let stateCopy={}
        stateCopy[name]=e.target.value
        this.setState(stateCopy)
    console.log(this.state)
    }
    work=()=>{
        var email_found;
        for(let i=0;i<this.state.info.length;++i){
            if(this.state.info[i].email===this.state.email){
                     email_found=this.state.email;
                     if(this.state.info[i].password===this.state.password){
                        this.setState({
                            email:"",
                            password:"",
                            isLogin:true
                     })
                         alert("Sign in sucessfull!Enjoy Shopping")
                        
                         console.log("got"+this.state.isLogin)
                         break;
                     }
                     else{
                         alert("Check Password")
                         break;
                     }

                 
            }
            }
            if(!email_found){
                alert("Email Not found")
        }
    }
    render() {
        if(this.state.isLogin){
            return (<Redirect to="/"/>)
        }
        return (
            <div className="geo">
                <div className="back">
                   <Link to="/" ><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="pen"/></Link>
                </div>
                <div className="sup">
                    <h1>Login</h1>
                    <p className="para">Email:</p>
                    <input type="email" value={this.state.email} onChange={(e)=>{this.Check(e,"email")}} placeholder="Enter Email or username"/><br></br><br></br>
                    <p className="para">Password</p>
                    <input type="password" value={this.state.password} onChange={(e)=>{this.Check(e,"password")}} placeholder="Enter Password"/><br></br><br></br>
                    <button onClick={this.work} className="login">Login</button><br></br><br></br>
                  <Link to="/signup">  <p className="para">New User</p><button className="new">Create Account</button></Link>
                </div>

            </div>
        )
    }
}

export default Signin