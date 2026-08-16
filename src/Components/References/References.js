import React from "react";
import "./References.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

// Placeholder employer references — swap for real ones.
const REFERENCES = [
  {
    text: "Chrispine ships clean, production-ready work — consistently ahead of schedule.",
    name: "Daniel K.",
    role: "Engineering Lead · Tech Savanna",
  },
  {
    text: "He owns problems end to end, from the data model to a polished UI, and keeps everyone aligned with clear communication. One of the most dependable engineers I’ve managed.",
    name: "Sarah M.",
    role: "Product Manager",
  },
  {
    text: "Give him an unfamiliar stack and he’s productive within days. A genuinely fast learner.",
    name: "James O.",
    role: "Senior Developer",
  },
  {
    text: "Reliable, collaborative, and obsessed with good user experience. Our front-end quality jumped after he joined.",
    name: "Aisha N.",
    role: "Team Lead",
  },
  {
    text: "Chrispine’s APIs are thoughtfully designed and his interfaces are pixel-accurate. He brought structure and momentum to our project while mentoring the junior devs.",
    name: "Brian W.",
    role: "CTO",
  },
  {
    text: "A standout full-stack contributor I’d hire again without hesitation.",
    name: "Grace L.",
    role: "Project Manager",
  },
];

function References() {
  return (
    <section id="references" className="referencesContainer section">
      <div className="container">
        <div className="refHead" data-reveal>
          <h2 className="sectionTitle">Employer story</h2>
          {/* <span className="eyebrow">05 — References</span> */}
          
        </div>

        <div className="refGrid">
          {REFERENCES.map((r, i) => (
            <figure
              className="refCard"
              key={i}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}
            >
              <FaQuoteLeft className="refQuote" size={22} />
              <blockquote className="refText">{r.text}</blockquote>
              <figcaption className="refAuthor">
                <span className="refName">{r.name}</span>
                <span className="refRole">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <footer className="contactFooter" data-reveal="fade">
          <p className="footerName">Chrispine Ochieng</p>
          <div className="footerSocials">
            <a
              href="https://github.com/c4928315"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/chrispine-ochieng-2421ab244/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
          <p className="footerNote">Designed &amp; built by Chrispine Ochieng</p>
        </footer>
      </div>
    </section>
  );
}

export default References;
