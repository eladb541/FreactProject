import React from 'react';
import {Link } from "react-router-dom";
import landscape from "../mediapic/landscape.jpg";
import "../styles/Home.css";

function Home() {
    return    (
        <div className="home" style={{ backgroundImage: `url(${landscape})` }}>
          <div className="headerContainer">
            <div className='header1'>
            <h1> My Search Web </h1></div>
            <br/> <br/> <br/>
            <div className='hi'>
           
              <h2>
             
            Welcome to the wonderful journey following the unique species in the tropics of the earth </h2></div>
            <br/> <br/>
            <br/> <br/>
            <div className='btn'>
            <Link to="/menu">
              <button> Let's Begin </button>
            </Link>
            </div>
          </div>
          <div className="bottomerContainer"/>
         
        </div>
      );
}

export default Home
