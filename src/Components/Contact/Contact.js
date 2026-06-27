import React from "react";
import "./Contact.css";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section className="contactContainer section">
      <div className="container">
        <div className="contactCard">
          <span className="eyebrow">04 — What’s next</span>
          <h2 className="contactH1">Let’s build something together.</h2>
          <p className="contactP">
            I’m always open to new opportunities and conversations — whether you
            have a question, a project in mind, or just want to say hi, my inbox
            is open.
          </p>
          <div className="contactActions">
            <a
              className="btn btn-primary"
              href="https://mail.google.com/mail/u/0/?to=cpine0223@gmail.com&fs=1&tf=cm"
              target="_blank"
              rel="noreferrer"
            >
              Say hello <FiArrowUpRight size={18} />
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/c4928315"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={18} /> GitHub
            </a>
          </div>
        </div>

        <footer className="contactFooter">
          <p className="footerName">Chrispine Ochieng</p>
          <div className="footerSocials">
            <a href="https://github.com/c4928315" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
          </div>
          <p className="footerNote">Designed &amp; built by Chrispine Ochieng</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
