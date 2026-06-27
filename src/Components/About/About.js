import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./About.css";

// Right-side images — swap these for whatever you like best.
import eduImg from "../../Assets/images/pexels-photo-1366909.jpeg";
import expImg from "../../Assets/images/experience-lg.jpg";

const PROFILE_IMG =
  "https://i.postimg.cc/qqv7kwM4/Whats-App-Image-2024-03-01-at-18-00-03.jpg";

const CV_LINK =
  "https://www.pdffiller.com/jsfiller-desk15/?flat_pdf_quality=low&requestHash=7b97879c0f066d54a5a06bf7a3fe2296a9e6eeccff9ca6c1d07bd47e574e30e5&projectId=1460986011&loader=tips&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-new-add-fields-popup=false&routeId=57383640e771b82ba38e253a958364ad#35789600e1d4436c9d2279d04aeb6789";

const TABS = [
  {
    num: "01",
    label: "About",
    title: "About me",
    img: PROFILE_IMG,
    paragraphs: [
      <>
        Hi, I’m <b>Chrispine Ochieng</b> — a software developer and computer
        science graduate of Moringa School. I enjoy building things that live on
        the internet, from polished front-end interfaces to the APIs and
        databases behind them.
      </>,
      <>
        My focus is building <b>accessible, reliable products</b> with a clean
        developer experience. I’m comfortable owning a feature end-to-end —
        designing the data model, wiring up the backend, and shipping a
        responsive UI.
      </>,
    ],
    chips: [
      "React.js",
      "JavaScript",
      "Ruby on Rails",
      "Node.js",
      "PostgreSQL",
      "HTML & CSS",
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
        role: "Software Engineering",
        org: "Moringa School",
        date: "Access Program · FlatIron curriculum",
        desc: "Six-month, full-stack engineering program covering JavaScript, React, Ruby and Rails — shipping project-based apps with real databases and APIs.",
      },
      {
        role: "Software Engineering",
        org: "ALX",
        date: "Backend & systems track",
        desc: "Deepened computer-science fundamentals, data structures and backend systems through rigorous, peer-driven projects.",
      },
      {
        role: "Continuous learning",
        org: "Self-directed",
        date: "Ongoing",
        desc: "Keep up with modern tooling and patterns by building side projects and following the ecosystem.",
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
        I’ve delivered production web apps for real clients, owning features from
        design through to deployment.
      </>,
    ],
    entries: [
      {
        role: "Frontend / Full-stack Developer",
        org: "Freelance & contract",
        date: "2023 — present",
        desc: "Built and shipped client products including Sahara Desk, Elewa Education and Beyond the Savannah using React, custom APIs and tailored UI.",
      },
      {
        role: "Project-based engineering",
        org: "Moringa & ALX",
        date: "2021 — 2023",
        desc: "Delivered numerous full-stack applications with authentication, REST APIs and responsive front-ends in fast-paced, collaborative sprints.",
      },
    ],
    cta: { text: "See my work", href: "https://github.com/c4928315" },
  },
];

function About() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="aboutMeContainer section">
      <div className="container">
        <div className="nexoPanel">
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
            </div>

            <div className="nexoRight">
              <img className="nexoImg" src={tab.img} alt={tab.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
