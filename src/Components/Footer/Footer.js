import React from "react";
import "./Footer.css";
import { AiOutlineTwitter,AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi"

function Footer() {


  return (
    <div className="footerContainer">
      <div className="footerHolder">
        <div id="about">
          <h4 className="footerHeader">about app</h4>
          <p className="text">A site build using react.js and custome css by chrispine ochieng </p>
        </div>
        <div id="ProjectCategory">
          <h4 className="footerHeader">project category</h4>
          <li className="text">React.js</li>
          <li className="text">Javascript</li>
          <li className="text">ruby on rails</li>
        </div>
        <div id="contact">
          <h4 className="footerHeader">contact info</h4>
          <li className="text">cpine0223@gmail.com</li>
          <li className="text">+254742592594</li>
        </div>
        <div id="socialSites">
          <h4 className="footerHeader">connect with me</h4>
          <div id="socialIcons">
           <AiOutlineTwitter className="icons" size={25}/>
           <TfiFacebook className="icons" size={25}/>
           <AiOutlineWhatsApp className="icons" size={25}/>
           <AiOutlineMail className="icons" size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
