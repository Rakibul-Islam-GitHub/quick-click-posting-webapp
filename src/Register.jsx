import React from "react";
import "./Register.css";
import {Button, TextField} from "@mui/material";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    
    <div className="login-container">
      <div className="login-form">
        <div>
          <h1 className="logoName">Quick Click</h1>
          {/* <img className="logoImage" src={logoImage}/> */}
        <h2 className="welcomeBack"> Lets Get Started</h2>
        </div>
        <form>
          
          <div className="form-group">
            <TextField  className="inputField" required id="standard-read-only-input"label="Name"variant="standard"/>
            {/* <TextField className="inputField" type="email" id="email" placeholder="Enter your email" /> */}
            {/* <span className="errorMessage">*Incorrect Email</span> */}
          </div>
          <div className="form-group">
          <TextField  className="inputField" required id="standard-password-input"label=" Password" type="password"autoComplete="current-password"variant="standard"
    />
            {/* <TextField className="inputField" type="password" id="password" placeholder="Enter your password" /> */}
            
          </div>
          <div className="form-group">
          <TextField  className="inputField"required id="standard-password-input"label=" Confirm Password" type="password"autoComplete="current-password"variant="standard"
    />
            {/* <TextField className="inputField" type="password" id="password" placeholder="Enter your password" /> */}
        
          </div>
          {/* <button type="submit">Login</button> */}
          <Link to={'/login'}>
          <Button className="loginButton" color="error"  variant="contained">Signup</Button></Link>
          </form>
      </div>
    </div>
  );
};

export default Register;