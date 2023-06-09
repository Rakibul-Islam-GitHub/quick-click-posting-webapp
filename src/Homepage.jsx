import React from "react";
import "./Homepage.css";
import Navbar from './Navbar';
import Feed from './Feed';
import Upload from './Upload';


const Homepage = () => {
  return (
    <div>
     <Navbar/>
     <Upload/>
     <Feed/>

    </div>
  );
};

export default Homepage;
