import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logonav from "./images/QC Logo.png";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logonav} alt="Logo" className="logo-img" />
        </div>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div> */}
        <div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/friends">Friends</a>
            </li>
            <li>
              <Link to ={'/login'}>
              <button className="nav-button">Log Out</button></Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
