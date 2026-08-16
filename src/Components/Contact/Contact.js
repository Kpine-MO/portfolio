import React from "react";
import "./Contact.css";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section className="contactContainer section">
      <div className="container">
        <div className="contactCard" data-reveal="zoom">
          <h2 className="contactH1">Let’s build something together.</h2>
          <p className="contactP">
            I’m always open to new opportunities and conversations — whether you
            have a question, a project in mind, or just want to say hi, my inbox
            is open.
          </p>
          <div className="contactActions">
            <a
              className="ctaBtn"
              href="https://mail.google.com/mail/u/0/?to=cpine0223@gmail.com&fs=1&tf=cm"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ctaBtnArrow">
                <FiArrowUpRight size={20} />
              </span>
              <span className="ctaBtnText">Say hello</span>
            </a>
            <a
              className="ctaBtn ctaBtn--ghost"
              href="https://github.com/c4928315"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ctaBtnArrow">
                <FiArrowUpRight size={20} />
              </span>
              <span className="ctaBtnText">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
