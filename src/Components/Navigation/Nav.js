import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <div className="navContainer">
      <div className="flexContainer">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <div className="navLinks">
          <ol id="ulNavLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allProj">Show Case</Link></li> 
            <li><Link to="/skills">About</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Nav;
