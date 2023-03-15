import React from "react";
import "./Psc.css";
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { Link } from "react-router-dom";

function Psc({ name, imgUrl, descript, technologies, github }) {
  return (
    <div className="Psc">
      <div className="projectDetails">
        <div className="aboutProjectContainer">
          <h3 className="feature">featured project</h3>
          <h5 className="projectTitle">{name}</h5>
          <p className="aboutProject">{descript}</p>
          <p className="technology">{technologies}</p>
          <div className="techIcons">
            <a href={github}><FiGithub className="techIconOne" size={20}/></a>
            <FiExternalLink className="techIconTwo"  size={20}/>
          </div>
        </div>
        <div className="projectImg-gradient">
        <img src={imgUrl} className="projectImg"/>
        </div>
        
      </div>
    </div>
  );
}

export default Psc;
