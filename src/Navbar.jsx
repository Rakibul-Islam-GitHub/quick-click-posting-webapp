import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logonav from "./images/QC Logo.png";
import { AuthContext } from "./context/AuthContext";


const Navbar = () => {
  const { authenticated } = useContext(AuthContext)

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logonav} alt="Logo" className="logo-img" />
        </div>
        
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/friends">Friends</a>
            </li>
            {authenticated ? <li>
              <Link to ={'#'}>
              <button className="nav-button">Log Out</button></Link>
            </li> :
            <li >
              <Link to ={'/login'}>
              <button className="nav-button" style={{backgroundColor:'#7f2f11'}}>Log in</button></Link>
            </li>}
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
