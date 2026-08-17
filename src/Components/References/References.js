import React from "react";
import "./References.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

// Employer references.
const REFERENCES = [
  {
    text: "Chrispine ships clean, production-ready work — consistently ahead of schedule.",
    name: "Ian Ochieng",
    role: "Engineering Lead · Tech Savanna",
  },
  {
    text: "He owns problems end to end, from the data model to a polished UI, and keeps everyone aligned with clear communication. One of the most dependable engineers I’ve managed.",
    name: "Mary Murugi",
    role: "Product Manager",
  },
  {
    text: "Give him an unfamiliar stack and he’s productive within days. A genuinely fast learner.",
    name: "Carter Masila",
    role: "Senior Developer",
  },
  {
    text: "Reliable, collaborative, and obsessed with good user experience. Our front-end quality jumped after he joined.",
    name: "Dishon Omina",
    role: "Team Lead",
  },
  {
    text: "Chrispine’s interfaces are pixel-accurate and his components are a pleasure to build on. He brought structure and momentum to our project.",
    name: "Alvin Odumo",
    role: "Senior Frontend Developer",
  },
  {
    text: "A standout contributor I’d work with again without hesitation — dependable, sharp, and easy to collaborate with.",
    name: "Margaret Ochieng",
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
