import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="heroContainer section">
      <div className="container heroInner">
        <h1 className="heroTitle" data-reveal>
          Hi, I’m Chrispine — I build
          <span className="heroAccent"> web applications</span> that ship.
        </h1>

        <p
          className="heroLead"
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
        >
          Frontend developer with 3+ years building responsive, accessible
          interfaces in React, Angular and Next.js. I turn Figma designs into
          fast, production-ready products — wired up to REST and GraphQL APIs.
        </p>

        <div
          className="heroActions"
          data-reveal
          style={{ "--reveal-delay": "240ms" }}
        >
          <Link className="heroCv" to="/cv">
            <span className="heroCvArrow">
              <FiArrowUpRight size={20} />
            </span>
            <span className="heroCvText">View CV</span>
          </Link>
        </div>

        <div
          className="heroStats"
          data-reveal
          style={{ "--reveal-delay": "360ms" }}
        >
          <div className="statItem">
            <span className="statNum">3<span className="statPlus">+</span></span>
            <span className="statLabel">Years experience</span>
          </div>
          <div className="statItem">
            <span className="statNum">10<span className="statPlus">+</span></span>
            <span className="statLabel">Products</span>
          </div>
          <a
            className="statItem statLogo"
            href="https://techsavanna.co.ke/"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Current company"
            aria-label="Current company: Tech Savanna"
          >
            <img
              className="companyLogo"
              src="https://techsavanna.co.ke/wp-content/themes/techsavanna/assets/images/tech-savanna-logo.svg"
              alt="Tech Savanna"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
