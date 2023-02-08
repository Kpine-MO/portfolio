import React, { useState } from "react";
import "./Ps.css";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import PscIcons from "../PscIcons/PscIcons";
import ClickAwayListener from "react-click-away-listener";

function Ps() {
  const [popUpMenu, setPopUpMenu] = useState(false);

  return (
    <div className="psContainer">
      <div className="categoryIcon">
        <MdCategory size={25} onClick={() => setPopUpMenu(true)} />
      </div>
      <div>
        {popUpMenu && (
          <ClickAwayListener onClickAway={() => setPopUpMenu(false)}>
            <div className={"dropDown"}>
              <div className="dropDownUl">
                <input className="dropDownInput shadowInput" type="text" placeholder="programming language"/>
                <br/>
                <input className="dropDownInput" type="file" placeholder="logo"/>
                <br/>
                <button type="submit" className="dropDownBtn">submit</button>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div className="psHolder">
       <div className="stylo">
       <h2>Project Categories</h2>
        <div className="bottom"></div>
        <div className="pscHolder">
          <div className="pscIcons one">
            <PscIcons />
          </div>
          <div className="pscIcons two">
            <PscIcons />
          </div>
          <div className="pscIcons">
            <PscIcons />
          </div>
        </div>
        <div className="innerPsHolder">
          <Link to="/react">
            <div className="react"></div>
            <h4 className="languageLink">React.js Projects</h4>
          </Link>
          <Link>
          <div className="javascript"></div>
          <h4 className="languageLink">Javascript Projects</h4>
          </Link>
          <Link>
          <div className="ruby"></div>
          <h4 className="languageLink">Ruby on Rails Projects</h4>
          </Link>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Ps;
