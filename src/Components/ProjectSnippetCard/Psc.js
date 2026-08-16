import React from "react";
import "./Psc.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Psc({ name, imgUrl, descript, technologies, github, link }) {
  return (
    <article className="showcaseCard">
      <div className="showcaseMedia">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imgUrl} alt={name} className="showcaseImg" />
        </a>
      </div>
      <div className="showcaseBody">
        <span className="feature">Featured project</span>
        <h3 className="projectTitle">
          <a href={link} target="_blank" rel="noreferrer">{name}</a>
        </h3>
        <p className="aboutProject">{descript}</p>
        <p className="technology">{technologies}</p>
        <div className="techIcons">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
          ) : null}
          <a href={link} target="_blank" rel="noreferrer" aria-label="Live site">
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default Psc;
