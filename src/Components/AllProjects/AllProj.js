import React, { useEffect, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./AllProj.css";

function AllProj() {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch("https://kpine-mo.github.io/Data/db.json")
      .then((res) => res.json())
      .then((data) => {
        
        setProjects(data.React)
    });
  }, []);
  return (
    <div className="allProjContainer hideOverflow">
      <div className="center">
      <div className="allProjHeader">
        <div>
        <h1 className="allProjH1">Noteworthy Projects</h1>
        <p className="pFlex">view my archive</p>
        </div>
      </div>
      <div className="child hideOverflow">
        {projects.slice(0, visible).map((item, i) => {
          return (
            <div className="card" key={i}>
              <div className="cardTop">
                <div className="cardTopLeft">
                  <CiFolderOn size={50} />
                </div>
                <div className="techIcons cardTopRight">
                  <a href={item.github} target="_blank">
                    <FiGithub className="techIconOne" size={18} />
                  </a>
                  <FiExternalLink className="techIconTwo" size={18} />
                </div>
              </div>
              <h2 className="allProjName">{item.name}</h2>
              <p className="allProjDescription">{item.description}</p>
              <p className="techUsed">{item.techUsed}</p>
            </div>
          );
        })}
      </div>
      <div className="allProjBtn">
        <button className="contactLink contactLinkBtn" onClick={showMoreItems}>
          show more
        </button>
      </div>
      </div>
    </div>
  );
}

export default AllProj;

// const [projects, setProjects] = useState([])
// const [visible, setVisible] = useState(6)

// useEffect(() => {
//     fetch"http://localhost:3001/allProjects"{

//     }
// })
