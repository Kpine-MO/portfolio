import React from "react";
import "./Psc2.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Psc2({ name, imgUrl, descript, technologies, github }) {
  return (
    <div className="Psc2">
      <div className="projectDetails2">
        <div className="projectImg-gradient2">
          <img src={imgUrl} className="projectImg2" />
        </div>
        <div className="aboutProjectContainer2">
          <h3 className="feature2">featured project</h3>
          <h5 className="projectTitle2">{name}</h5>
          <p className="aboutProject2">{descript}</p>
          <p className="technology2">{technologies}</p>
          <div className="techIcons2">
            <a href={github} target="_blank">
              <FiGithub className="techIconOne2" size={20} />
            </a>
            <FiExternalLink className="techIconTwo2" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Psc2;
