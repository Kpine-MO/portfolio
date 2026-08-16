import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "./About.css";

// Right-side images — themed to each tab (software engineering).
import eduImg from "../../Assets/images/about-education.jpg";
import expImg from "../../Assets/images/about-experience.jpg";

const PROFILE_IMG =
  "https://i.postimg.cc/qqv7kwM4/Whats-App-Image-2024-03-01-at-18-00-03.jpg";

const CV_LINK = "/cv";

const TABS = [
  {
    num: "01",
    label: "About",
    title: "About me",
    img: PROFILE_IMG,
    imgPos: "center top",
    imgAspect: "3 / 4",
    paragraphs: [
      <>
        Hi, I’m <b>Chrispine Ochieng</b> — a <b>frontend developer</b> based in
        Nairobi, Kenya, with 3+ years turning Figma designs into polished,
        accessible interfaces in React, Angular and Next.js.
      </>,
      <>
        My focus is building <b>reliable, user-focused products</b> — from
        reusable, design-system-driven components to the REST and GraphQL
        integrations behind them. I’m comfortable owning a feature end-to-end and
        shipping fast without cutting corners on quality.
      </>,
    ],
    chips: [
      "React.js",
      "Angular",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Figma",
    ],
    cta: { text: "View CV", href: CV_LINK },
  },
  {
    num: "02",
    label: "Education",
    title: "Education & skills",
    img: eduImg,
    paragraphs: [
      <>
        I built my foundation through intensive, project-based programs and a lot
        of self-directed learning.
      </>,
    ],
    entries: [
      {
        role: "BSc, Software Engineering",
        org: "Muranga University",
        date: "Degree",
        desc: "Studied software engineering fundamentals — data structures, systems and the practices behind building maintainable software.",
      },
      {
        role: "Certificate, Software Engineering",
        org: "Moringa School",
        date: "Apr 2022 — Nov 2022",
        desc: "Intensive, project-based program covering web development, testing and deployment — shipping full-stack apps with real databases and APIs.",
      },
      {
        role: "Continuous learning",
        org: "Self-directed",
        date: "Ongoing",
        desc: "Keep up with modern frontend tooling and patterns by building side projects and following the ecosystem.",
      },
    ],
    cta: { text: "View CV", href: CV_LINK },
  },
  {
    num: "03",
    label: "Experience",
    title: "Experience",
    img: expImg,
    paragraphs: [
      <>
        I’ve delivered production frontends for enterprise and client products,
        owning features from Figma through to deployment.
      </>,
    ],
    entries: [
      {
        role: "Frontend Developer (Safaricom project)",
        org: "TechSavanna",
        date: "Mar 2026 — Present",
        desc: "Building and maintaining frontend features for enterprise web apps in React, Next.js and TypeScript — reusable components from Figma, REST/GraphQL integrations with Apollo Client, and API-driven user journeys.",
      },
      {
        role: "Frontend Developer & Designer",
        org: "Beyond Savannah",
        date: "Feb 2024 — Nov 2025",
        desc: "Designed and built the Career Coach app with React and a component-driven architecture — translating Figma designs into UI components and integrating REST APIs and MPesa.",
      },
      {
        role: "Frontend Developer",
        org: "Tovuti Group",
        date: "Aug 2023 — Jan 2024",
        desc: "Developed scalable frontend components for an asset-management platform in React and Bootstrap, with responsive layouts and cross-browser performance in Agile sprints.",
      },
      {
        role: "Junior Frontend Developer",
        org: "I-talanta",
        date: "Jan 2023 — Jun 2023",
        desc: "Built organization websites and frontend features in Angular and React, integrating RESTful APIs and collaborating via Git in daily standups.",
      },
    ],
    cta: { text: "See my work", href: "https://github.com/c4928315" },
  },
];

function About() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="about" className="aboutMeContainer section">
      <div className="container">
        <div className="nexoPanel" data-reveal>
          <div className="nexoTabs" role="tablist">
            {TABS.map((t, i) => (
              <button
                key={t.num}
                role="tab"
                aria-selected={i === active}
                className={`nexoTab ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="nexoTabNum">{t.num}</span>
                <span className="nexoTabLabel">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="nexoBody">
            <div className="nexoLeft">
              <h2 className="nexoTitle">{tab.title}</h2>

              {tab.paragraphs.map((p, i) => (
                <p className="nexoText" key={i}>
                  {p}
                </p>
              ))}

              {tab.chips && (
                <ul className="nexoChips">
                  {tab.chips.map((c) => (
                    <li className="nexoChip" key={c}>
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {tab.entries && (
                <div className="nexoEntries">
                  {tab.entries.map((e, i) => (
                    <div className="nexoEntry" key={i}>
                      <h4 className="nexoEntryRole">
                        {e.role} <span className="nexoEntryOrg">· {e.org}</span>
                      </h4>
                      <p className="nexoEntryDate">{e.date}</p>
                      <p className="nexoEntryDesc">{e.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {tab.cta.href.startsWith("/") ? (
                <Link className="nexoCta" to={tab.cta.href}>
                  <span className="nexoCtaArrow">
                    <FiArrowUpRight size={18} />
                  </span>
                  <span className="nexoCtaText">{tab.cta.text}</span>
                </Link>
              ) : (
                <a
                  className="nexoCta"
                  href={tab.cta.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="nexoCtaArrow">
                    <FiArrowUpRight size={18} />
                  </span>
                  <span className="nexoCtaText">{tab.cta.text}</span>
                </a>
              )}
            </div>

            <div className="nexoRight">
              <img
                className="nexoImg"
                src={tab.img}
                alt={tab.title}
                data-reveal="right"
                style={{ "--reveal-delay": "120ms", objectPosition: tab.imgPos || "center top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
