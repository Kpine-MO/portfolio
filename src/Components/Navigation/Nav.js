import React from "react";
import { TbHexagon } from "react-icons/tb"
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <div className="navContainer hideOverflow">
      <div className="flexContainer hideOverflow">
        <div className="logo">
        <div class="hexagon">
          <h6 className="logoH6">CO</h6>
        </div>
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
