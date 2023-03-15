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
          <ul id="ulNavLinks">
            <Link to="/home"><li>Home</li></Link>
            <Link to="/ps"><li>Show Case</li></Link>
            <Link><li>About</li></Link>
            <Link><li>Contacts</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
