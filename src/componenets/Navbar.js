import React, { useEffect, useState, } from "react";
import logo from "../../src/mediapic/pic1.png";
import{Link}  from "react-router-dom";
import "../../src/styles/Navbar.css";
import logo2 from "../../src/mediapic/setting3.png";




export default function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    //יצירת הקישורים
    //here are set the links.Instead text may put image/buttom which will lead my to requested page.
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={logo}   />
          <div className="hiddenLinks">
          
            <Link to="/"> Home</Link>
           
            <Link to="/menu"> Menu </Link>
            <Link to="/weather"> Weather </Link>
            <Link to="/tttapp"> TTT </Link>
         
            
          </div>
        </div>
        <div className="rightSide">
        <Link to="/"> Home</Link>
           
        <Link to="/menu"> Menu </Link>
           <Link to="/weather"> Weather </Link>
           <Link to="/tttapp"> TTT </Link>
         
      
          <button onClick={toggleNavbar}>
          <img src={logo2} />
          </button>
        </div>
      </div>
    );
    
}
