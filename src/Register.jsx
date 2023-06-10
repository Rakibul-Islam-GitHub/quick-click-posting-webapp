import React, { useContext, useEffect } from "react";
import "./Register.css";
import {Button, TextField} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { doRegister } from "./api-call/api";
const Register = () => {

  const {  authenticated} = useContext(AuthContext)
   const navigate= useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      const name= e.target.name.value
      const email= e.target.email.value
      const password= e.target.password.value
      if (name==='' || email==='' || password==='') {
        alert('please fill up all fields!')
        return
      }

      doRegister({name,email, password}, (res)=>{
        
        if (res) {
          navigate('/login')
        alert('Registration successfull. login now!')
    
          
        }else{alert('Duplicate email')}
      })

    }

    useEffect(()=>{
      if (authenticated) {
        navigate('/')
      }
    },[authenticated, navigate])


  return (

    <div className="login-container">
      <div className="login-form">
        <div>
         <h1 className="logoName"><Link to={'/'}>Quick Click</Link></h1>
          {/* <img className="logoImage" src={logoImage}/> */}
        <h2 className="welcomeBack"> Lets Get Started</h2>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          
          <div className="form-group">
            <TextField className="inputField" name='name' required  label="Full Name" variant="standard" placeholder="Enter your full name" />
            {/* <span className="errorMessage">*Incorrect Email</span> */}
          </div>
         
          <div className="form-group">
            <TextField className="inputField" variant="standard" name='email' label="Email" type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
          <TextField  className="inputField" label=" Password" name="password" type="password" autoComplete="current-password"variant="standard"/>
          </div>
          
          
          <Button className="loginButton" color="error"  type="submit" variant="contained">Signup</Button>
        </form>
        <Link to={'/login'}>
          <p className="newuser">Already have account ? <span className="signup">Signin</span></p></Link>
      </div>
    </div>
  );
};

export default Register;