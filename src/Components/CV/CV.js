import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CV.css";
import { FiDownload, FiArrowLeft, FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const SKILLS = [
  { group: "Frontend", items: "React.js, Angular, Next.js, TypeScript, HTML5, CSS3, Bootstrap, Tailwind, Redux" },
  { group: "Backend & Databases", items: "Ruby on Rails, SQL, PostgreSQL, SQLite" },
  { group: "APIs & Integrations", items: "RESTful APIs, GraphQL (Apollo Client), MPesa integration" },
  { group: "Tools & Design", items: "Figma, Git, responsive design, cross-browser compatibility" },
  { group: "Practices", items: "Agile development, code reviews, component-driven design" },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer — Contractor (Safaricom Project)",
    org: "TechSavanna",
    date: "Mar 2026 — Present",
    points: [
      "Develop and maintain frontend features for enterprise web applications using React, Next.js, TypeScript and modern component-based architecture.",
      "Build reusable UI components from Figma designs, following design-system, responsiveness and accessibility standards.",
      "Integrate screens with REST/GraphQL APIs and manage data flows using Apollo Client and related state-management patterns.",
      "Work with authentication, protected routes, environment-based configuration and API-driven user journeys.",
      "Collaborate with backend engineers, QA, designers and product teams in Agile sprints to ship production-ready features.",
    ],
  },
  {
    role: "Frontend Developer & Designer",
    org: "Beyond Savannah",
    date: "Feb 2024 — Nov 2025",
    points: [
      "Designed and implemented the Career Coach application using React and a component-driven architecture.",
      "Translated Figma designs into high-quality UI components and prototypes.",
      "Integrated REST APIs and MPesa to support data and payment flows.",
      "Collaborated with stakeholders to gather requirements and improve usability across devices.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Tovuti Group",
    date: "Aug 2023 — Jan 2024",
    points: [
      "Developed and maintained scalable frontend components for an asset-management platform using React and Bootstrap.",
      "Implemented responsive layouts and optimized front-end performance for cross-browser compatibility.",
      "Participated in sprint planning, code reviews and product refinement sessions.",
      "Converted Figma designs into production-ready UIs and integrated them with backend APIs.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    org: "I-talanta",
    date: "Jan 2023 — Jun 2023",
    points: [
      "Built organization websites and frontend features using Angular and React.",
      "Integrated frontends with RESTful APIs and collaborated via Git in daily standups.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Career Coach (Beyond Savannah)",
    stack: "React · REST API · Figma · Bootstrap · MPesa",
    desc: "Responsive frontend built from Figma into reusable React components, with third-party APIs for payments and data flows.",
  },
  {
    name: "Sahara Desk",
    stack: "React · REST API · React Context",
    desc: "Interactive dashboards with responsive behavior across devices for a management platform.",
  },
  {
    name: "Elewa Education",
    stack: "Angular · API integration · Bootstrap",
    desc: "UI features and backend-service integration supporting content delivery and user flows.",
  },
  {
    name: "Moringa Connect",
    stack: "Angular · Ruby on Rails · REST APIs",
    desc: "End-to-end features connecting frontend components to Rails APIs; collaborated on data modeling and endpoint design.",
  },
];

const EDUCATION = [
  {
    school: "Muranga University",
    award: "BSc, Software Engineering",
    date: "",
  },
  {
    school: "Moringa School",
    award: "Certificate, Software Engineering",
    date: "Apr 2022 — Nov 2022",
    note: "Intensive program covering web development, testing and deployment.",
  },
];

function CV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cvPage section">
      <div className="container">
        {/* Action bar — hidden when printing */}
        <div className="cvActions" data-noprint>
          <Link to="/" className="cvBtn cvBtn--ghost">
            <FiArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <button
            type="button"
            className="cvBtn"
            onClick={() => window.print()}
          >
            <FiDownload size={18} />
            <span>Download / Print</span>
          </button>
        </div>

        <article className="cvSheet">
          {/* Header */}
          <header className="cvHead">
            <h1 className="cvName">Chrispine Oduor Ochieng</h1>
            <p className="cvRole">Frontend Developer</p>
            <ul className="cvContact">
              <li>
                <FiMapPin size={15} /> Nairobi, Kenya
              </li>
              <li>
                <FiPhone size={15} />
                <a href="tel:+254742592594">+254 742 592 594</a>
              </li>
              <li>
                <FiMail size={15} />
                <a href="mailto:cpine0223@gmail.com">cpine0223@gmail.com</a>
              </li>
              <li>
                <FiGlobe size={15} />
                <a
                  href="https://portfolio-kpine-mo.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  portfolio-kpine-mo.vercel.app
                </a>
              </li>
            </ul>
          </header>

          <section className="cvBlock">
            <h2 className="cvBlockTitle">Professional summary</h2>
            <p className="cvSummary">
              Enthusiastic and driven software engineer with 3+ years building
              robust web applications across frontend and backend stacks.
              Experienced delivering user-focused interfaces with React and
              Angular, integrating REST APIs, and designing intuitive UI/UX in
              Figma. A strong collaborator who turns product requirements into
              scalable, responsive solutions and ships features quickly while
              maintaining code quality.
            </p>
          </section>

          <div className="cvGrid">
            <div className="cvMain">
              <section className="cvBlock">
                <h2 className="cvBlockTitle">Experience</h2>
                {EXPERIENCE.map((e) => (
                  <div className="cvEntry" key={e.role + e.org}>
                    <div className="cvEntryHead">
                      <h3 className="cvEntryRole">{e.role}</h3>
                      <span className="cvEntryDate">{e.date}</span>
                    </div>
                    <p className="cvEntryOrg">{e.org}</p>
                    <ul className="cvBullets">
                      {e.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className="cvBlock">
                <h2 className="cvBlockTitle">Selected projects</h2>
                {PROJECTS.map((p) => (
                  <div className="cvProject" key={p.name}>
                    <h3 className="cvProjectName">{p.name}</h3>
                    <p className="cvProjectStack">{p.stack}</p>
                    <p className="cvProjectDesc">{p.desc}</p>
                  </div>
                ))}
              </section>
            </div>

            <aside className="cvAside">
              <section className="cvBlock">
                <h2 className="cvBlockTitle">Technical skills</h2>
                {SKILLS.map((s) => (
                  <div className="cvSkill" key={s.group}>
                    <h3 className="cvSkillGroup">{s.group}</h3>
                    <p className="cvSkillItems">{s.items}</p>
                  </div>
                ))}
              </section>

              <section className="cvBlock">
                <h2 className="cvBlockTitle">Education</h2>
                {EDUCATION.map((ed) => (
                  <div className="cvEdu" key={ed.school}>
                    <h3 className="cvEduAward">{ed.award}</h3>
                    <p className="cvEduSchool">{ed.school}</p>
                    {ed.date && <p className="cvEduDate">{ed.date}</p>}
                    {ed.note && <p className="cvEduNote">{ed.note}</p>}
                  </div>
                ))}
              </section>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}

export default CV;
