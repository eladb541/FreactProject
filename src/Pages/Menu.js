import React from 'react'
import gTurtle from "../../src/mediapic/Galapagos_Tortoise.jpg";
import BFB from "../../src/mediapic/Blue-footed-booby.jpg";
import Gpenguin from "../../src/mediapic/Galapagos_Penguin.jpg";
import RFB from "../../src/mediapic/red footed booby.jpg";
import Wgalapagos from "../../src/mediapic/Waved_Albatross.jpg";

import {Link } from "react-router-dom";
import Pelecanus_occidentalis from "../../src/mediapic/Pelecanus_occidentalis.JPG";



import  "../styles/Menu.css"

function Menu() {
    return (
        <div className="menu"  >
           
         <div className="menupic" display="flex">
            <Link to="/Galapagus_Turtle"><img src={gTurtle}  alt="Galapagus Turtle" title="Galapagus Turtle"></img>  </Link>
            <Link to="/blue_footed_bubby"><img src={BFB}  alt="Blue Footed Bubby" title="Blue Footed Bubby"></img>  </Link>
            <Link to="/Galapagos_Penguin"><img src={Gpenguin}  alt="Galapagos Penguin" title="Galapagos Penguin"></img>  </Link>
            <Link to="/red_footed_booby">  <img src={RFB}  alt="red footed booby" title="red footed booby"></img> </Link>
            <Link to="/Waved_Albatross">  <img src={Wgalapagos}  alt="Waved Albatross" title="Waved Albatross"></img> </Link>
            <Link to="/Pelecanus_occidentalis">  <img src={Pelecanus_occidentalis}  alt="Pelecanus_occidentalis" title="Pelecanus_occidentalis"></img> </Link>
            
           
          
     


        </div>
       
        </div>
      );
}

export default Menu
