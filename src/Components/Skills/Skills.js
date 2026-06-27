import React from "react";
import "./Skills.css";
import { FiArrowUpRight } from "react-icons/fi";

// 3 real projects + 5 mock placeholders (swap the mock ones later).
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
    name: "Beyond the Savannah",
    tag: "React",
    action: "Live demo",
    link: "https://beyondthesavannah.co.ke/",
    size: "md",
  },
  {
    name: "Mezame Space",
    tag: "Next.js · Node",
    action: "Case study",
    link: "#",
    size: "lg",
  },
  {
    name: "DevConnect",
    tag: "React · Firebase",
    action: "Case study",
    link: "#",
    size: "lg",
  },
  {
    name: "ShopFlow",
    tag: "React · Stripe",
    action: "Case study",
    link: "#",
    size: "md",
  },
  {
    name: "TaskPilot",
    tag: "React · Rails API",
    action: "Case study",
    link: "#",
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
    <section className="skillz section">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">02 — Selected work</span>
          <h2 className="sectionTitle">Featured projects</h2>
        </div>

        <div className="bentoGrid">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              className={`bentoCard ${p.size} ${p.featured ? "featured" : ""}`}
              href={p.link}
              target="_blank"
              rel="noreferrer"
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
