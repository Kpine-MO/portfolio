import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { RiLinkedinLine } from "react-icons/ri"
import { CgFigma } from "react-icons/cg"
import { TbBrandGmail } from "react-icons/tb"
import "./Hero.css";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="decore"></div>
      <div className="leftContent">
        <h4>Hi, my name is</h4>
        <h1>Chrispine Ochieng</h1>
        <h1 className="fade">a web developer .</h1>
        <p>lorem *10 or lorem *100 used to work and give a single para of lorem but 10 times its size and so on.But now it doesn't seem to work. Please fix this as this feature was quite handy.</p>
        <button className="heroBtn">Show More</button>
        <div className="socialLinks">
        <div><TbBrandGmail size={22}/></div>
        <div><FaGithub size={22}/></div>
        <div><RiLinkedinLine size={22}/></div>
        <div><CgFigma size={22}/></div>
        </div>
       {/* <div className="heroAbsolute react" ><FaReact size={80}/></div>
       <div className="heroAbsolute js"><TbBrandJavascript size={80}/></div>
       <div className="heroAbsolute ruby"><DiRuby size={80}/></div>
       <div className="heroAbsolute psql"><DiPostgresql size={80}/></div>
       <div className="heroAbsolute sql"><SiSqlite size={80}/></div>
       <div className="heroAbsolute css"><SiCss3 size={80}/></div>
       <div className="heroAbsolute html"><SiHtml5 size={80}/></div> */}
      </div>
      <div className="rightContent"></div>
    </div>
  );
}

export default Hero;
