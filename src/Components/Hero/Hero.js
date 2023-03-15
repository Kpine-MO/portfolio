import React from "react";

import { FiLinkedin } from "react-icons/fi";
import { CgFigma } from "react-icons/cg";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="decore"></div>
      <div className="leftContent">
        <h4>Hi, my name is</h4>
        <h1 className="bright">Chrispine Ochieng .</h1>
        <h1 className="fade">i am a web developer .</h1>
        <p>
          lorem *10 or lorem *100 used to work and give a single para of lorem
          but 10 times its size and so on.But now it doesn't seem to work.
          Please fix this as this feature was quite handy.
        </p>
        <a href="https://drive.google.com/file/d/1SLmSVMKkRnh1P4eiRpMx4GlerexgbUg7/view?usp=sharing">
        <button className="heroBtn">explore CV</button>
        </a>
        <div className="socialLinks">
          <div className="socialLinksSingle">
            <AiOutlineTwitter size={20} />
          </div>
          <div className="socialLinksSingle">
            <FiGithub size={20} />
          </div>
          <div className="socialLinksSingle">
            <FiLinkedin size={20} />
          </div>
          <div className="socialLinksSingle">
            <AiOutlineInstagram size={20} />
          </div>
          <div className="socialLinksSingle">
            <CgFigma size={20} />
          </div>
          <div className="ancor"></div>
          <div className="socialRight">
            <div className="web"><h3>cpine0223@gmail.com</h3></div>
            <div className="ancorRight"></div>
        </div>
        </div>
        
        {/* <div className="heroAbsolute react" ><FaReact size={80}/></div>
       <div className="heroAbsolute js"><TbBrandJavascript size={80}/></div>
       <div className="heroAbsolute ruby"><DiRuby size={80}/></div>
       <div className="heroAbsolute psql"><DiPostgresql size={80}/></div>
       <div className="heroAbsolute sql"><SiSqlite size={80}/></div>
       <div className="heroAbsolute css"><SiCss3 size={80}/></div>
       <div className="heroAbsolute html"><SiHtml5 size={80}/></div> */}
      </div>
      {/* <div className="rightContent"></div> */}
    </div>
  );
}

export default Hero;
