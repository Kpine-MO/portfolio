import React from "react";
import "./Hero.css";
import { FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="heroContainer section">
      <div className="container heroInner">
        <h1 className="heroTitle">
          Hi, I’m Chrispine — I build
          <span className="heroAccent"> web applications</span> that ship.
        </h1>

        <p className="heroLead">
          Computer science graduate and full-stack developer specializing in
          React, Ruby on Rails and clean, accessible interfaces. I turn ideas
          into fast, reliable products — front to back.
        </p>

        <div className="heroActions">
          <a
            className="heroCv"
            href="https://www.pdffiller.com/jsfiller-desk15/?flat_pdf_quality=low&requestHash=7b97879c0f066d54a5a06bf7a3fe2296a9e6eeccff9ca6c1d07bd47e574e30e5&projectId=1460986011&loader=tips&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-new-add-fields-popup=false&routeId=57383640e771b82ba38e253a958364ad#35789600e1d4436c9d2279d04aeb6789"
            target="_blank"
            rel="noreferrer"
          >
            <span className="heroCvArrow">
              <FiArrowUpRight size={20} />
            </span>
            <span className="heroCvText">View CV</span>
          </a>
        </div>

        <div className="heroStats">
          <div className="statItem">
            <span className="statNum">3<span className="statPlus">+</span></span>
            <span className="statLabel">Years building<br />for the web</span>
          </div>
          <div className="statItem">
            <span className="statNum">10<span className="statPlus">+</span></span>
            <span className="statLabel">Products<br />shipped</span>
          </div>
          <div className="statItem">
            <span className="statNum">5<span className="statPlus">+</span></span>
            <span className="statLabel">Core<br />technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
