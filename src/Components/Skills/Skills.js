import React from "react";
import "./Skills.css";
import ProjectReact from "../React/React";

function Skills() {
  return (
    <section className="skillz section">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">02 — Selected work</span>
          <h2 className="sectionTitle">Featured projects</h2>
          <p className="sectionSub">
            A closer look at products I’ve designed and built end-to-end.
          </p>
        </div>

        <div className="projectDisplay">
          <ProjectReact />
        </div>
      </div>
    </section>
  );
}

export default Skills;
