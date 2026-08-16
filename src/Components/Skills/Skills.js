import React from "react";
import "./Skills.css";
import { FiArrowUpRight } from "react-icons/fi";

// 4 real projects + 4 mock placeholders (swap the mock ones later).
// size: "md" = 2/6 cols, "lg" = 3/6 cols. Pattern fills rows of 3 / 2 / 3.
const PROJECTS = [
  {
    name: "Sahara Desk",
    tag: "React · JSON Server",
    action: "Live demo",
    link: "https://portal.saharadesk.com/",
    size: "md",
  },
  {
    name: "Elewa Education",
    tag: "React",
    action: "Live demo",
    link: "https://elewa.co.ke/home",
    size: "md",
  },
  {
    name: "Career Coach",
    tag: "React · Figma · MPesa",
    action: "Live demo",
    link: "https://beyondthesavannah.co.ke/",
    size: "md",
  },
  {
    name: "Mezame Space",
    tag: "Next.js · Node",
    action: "Live demo",
    link: "https://mezame.space/",
    size: "lg",
  },
  {
    name: "Moringa Connect",
    tag: "Angular · Rails · REST",
    action: "Case study",
    link: "#",
    size: "lg",
  },
  {
    name: "Freelance Jobs",
    tag: "Figma · UI/UX",
    action: "View design",
    link: "https://www.figma.com/design/RXRjWfuSzFpCyc7Ys2A6RQ/Freelance-Jobs?node-id=0-1&p=f&t=WBeOq2O1B2ES9byG-0",
    size: "md",
  },
  {
    name: "Sahara Desk — Design",
    tag: "Figma · UI/UX",
    action: "View design",
    link: "https://www.figma.com/design/UECDyGrRGKzT3Jxuk92MvX/saharadesk-web?node-id=0-1&p=f&t=HCYrHybpSAtJ0hc9-0",
    size: "md",
  },
  {
    name: "FinTrack",
    tag: "React · Chart.js",
    action: "Case study",
    link: "#",
    size: "md",
  },
];

function Skills() {
  return (
    <section id="projects" className="skillz section">
      <div className="container">
        <div className="sectionHead" data-reveal>
          <h2 className="sectionTitle">Featured projects</h2>
        </div>

        <div className="bentoGrid">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              className={`bentoCard ${p.size} ${p.featured ? "featured" : ""}`}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}
            >
              <div className="bentoTop">
                <div className="bentoPills">
                  <span className="bentoPill filled">{p.action}</span>
                  <span className="bentoPill outline">{p.tag}</span>
                </div>
                <FiArrowUpRight className="bentoArrow" size={22} />
              </div>
              <h3 className="bentoTitle">{p.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
