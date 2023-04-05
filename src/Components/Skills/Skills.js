import React from "react";
import "./Skills.css";
import { GrReactjs } from "react-icons/gr";
import { VscProject } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiRubygems, SiCsswizardry } from "react-icons/si";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";
import ProjectReact from "../React/React";

function Skills() {
  const icons = {
    color: "#8892b0",
  };
  return (
    <div className="skillz">
      <div className="skillsLayer1">
        <div className="flex">
          <div className="Number">
            <h2 className="numbersShowCase">2.</h2>
          </div>
          <div className="styleDiv pull">
            <h3 className="skillsMain allProjH1 ">Top Of The List Projects</h3>
            <div className="spanStyle spanStyleSkills"></div>
          </div>
        </div>
        <div className="projectDisplay">
          <ProjectReact />
        </div>
      </div>
    </div>
  );
}

export default Skills;
