import React, { useContext, useEffect } from "react";
import "./Register.css";
import {Button, TextField} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { doLogin } from "./api-call/api";
import { AuthContext } from "./context/AuthContext";
const LoginPage = () => {
  const { setUser,setAuthenticated , authenticated} = useContext(AuthContext)
   const navigate= useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      const email= e.target.email.value
      const password= e.target.password.value
      if (email==='' || password==='') {
        alert('please fill up all fields!')
        return
      }
      doLogin({email, password}, (res)=>{
        
        if (res) {
        localStorage.setItem("user", JSON.stringify(res));
    setUser(res);
    setAuthenticated(true)
    navigate('/')
          
        }else{alert('wrong email or password')}
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
        <h2 className="welcomeBack">Welcome Back</h2>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>

          <div className="form-group">
          <TextField  className="inputField" type="email" name="email" required id="standard-read-only-input"label="Email"variant="standard"/>
          </div>

          <div className="form-group">
          <TextField  className="inputField"required name="password" label="Password" type="password"autoComplete="current-password"variant="standard"/>
            
          </div>
          {/* <button type="submit">Login</button> */}
          
          <Button className="loginButton" type="submit" variant="contained" color="error">Login</Button>
          </form>
          <Link to={'/register'}>
          <p className="newuser">New user ? <span className="signup">SignUp</span></p></Link>
      </div>
    </div>
  );
};

export default LoginPage;