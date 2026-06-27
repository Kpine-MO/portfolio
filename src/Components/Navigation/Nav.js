import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header className="navContainer">
      <div className="flexContainer container">
        <Link to="/" className="logo">
          <span className="logoMark">CO</span>
          <span className="logoWord">Chrispine Ochieng</span>
        </Link>

        <nav className="navLinks">
          <ol id="ulNavLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allProj">Work</Link></li>
            <li><Link to="/skills">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ol>
        </nav>

        <a
          className="navCta btn btn-primary"
          href="https://mail.google.com/mail/u/0/?to=cpine0223@gmail.com&fs=1&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export default Nav;
