import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="heroContainer hideOverflow">
      <div className="holder hideOverflow">
        <div className="decore"></div>
        <div className="leftContent hideOverflow">
          <h4>Hi, my name is</h4>
          <h1 className="bright">Chrispine Ochieng.</h1>
          <h1 className="fade">i build web applications.</h1>
          <p className="bigParagraph">
            I’m an enthusiastic computer science graduate from Moringa School
            with plenty of experience in web development, web design,
            Web testing, computer programming and both frontend and backend
            development. Equipped with a diverse and promising skill set,
            proficient in Ruby on Rails, React js, Postgres and SQLITE. Able to
            effectively Self manage and collaborate as a team member. A first
            learner.
          </p>
          <a
            href="https://drive.google.com/file/d/1SLmSVMKkRnh1P4eiRpMx4GlerexgbUg7/view?usp=sharing/"
            target="_blank"
          >
            <button className="heroBtn">explore CV</button>
          </a>
         

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
    </div>
  );
}

export default Hero;
