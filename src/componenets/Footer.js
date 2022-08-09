import React from 'react'
import insta from"../mediapic/instagram.png";
import facebook from"../mediapic/facebook.png";
import massanger from"../mediapic/Messenger.png";
import "../styles/Footer.css";






function Footer() {
    return (
        <div className="footer">
          <div className="socialMedia" display="flex">
            <img src={insta} height="30" width="30"></img>
            <img src={facebook} height="30" width="30"></img>
            <img src={massanger} height="30" width="30"></img>
          </div>
          <p> &copy; 2021 eladbergersites.com</p>
        </div>
      );
}

export default Footer
