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

  // useEffect(() => {
  //   fetch("https://kpine-mo.github.io/Data/db.json")
  //     .then((res) => res.json())
  //     .then((data) => {
        
  //       setProjects(data.React)
  //   });
  // }, []);

  const array =  [
    {
         id: 1,
         name: "Sahara Desk",
         imgUrl: "https://i.postimg.cc/7PQvF5q7/Screenshot-2024-03-01-at-15-07-12.png",
         description: "A web application for asset management purposes",
         github: "https://github.com/c4928315/Tovuti_Desk",
         techUsed: "React.js  JSON.server",
         technologies: "React js front-end application with custom css and json server",
         link: "https://saharadeskdemo.azurewebsites.net"
     },
      {
         id: 2,
         name: "Elewa Education",
         imgUrl: "https://i.postimg.cc/1XVWh5Kc/Screenshot-2024-03-01-at-15-46-11.png",
         description: "An application with the purpose of bringing education closer to the consumers",
         github: "https://github.com/c4928315/elewa-website",
         techUsed: "React.js  JSON.server",
         technologies: "React js front-end application with custom css and json server",
         link: "https://elewa.co.ke/home"
     },
      {
         id: 3,
         name: "Beyond The Savannah",
         imgUrl: "https://i.postimg.cc/hjXFvnrh/Screenshot-2024-03-01-at-15-28-12.png",
         description: "A it is a career coach website expected to provide premium packages and a job vacancies links. ",
         github: "https://github.com/c4928315/jobFinder",
         techUsed: "React.js  JSON.server",
         technologies: "React js front-end application with custom css and json server",
         link: "https://beyondthesavannah.co.ke/"
     }
 ]

  return (
    <section className="allProjContainer section">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">03 — More work</span>
          <h2 className="sectionTitle">Other noteworthy projects</h2>
        </div>

        <div className="child">
          {array.slice(0, visible).map((item, i) => {
            return (
              <a
                className="card"
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="cardTop">
                  <div className="cardTopLeft">
                    <CiFolderOn size={28} />
                  </div>
                  <div className="techIcons cardTopRight">
                    {item.github ? (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(item.github, "_blank");
                        }}
                        aria-label="GitHub"
                      >
                        <FiGithub size={18} />
                      </span>
                    ) : null}
                    <FiExternalLink size={18} />
                  </div>
                </div>
                <h3 className="allProjName">{item.name}</h3>
                <p className="allProjDescription">{item.description}</p>
                <p className="techUsed">{item.techUsed}</p>
              </a>
            );
          })}
        </div>

        {visible < array.length && (
          <div className="allProjBtn">
            <button className="btn btn-ghost" onClick={showMoreItems}>
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProj;

// const [projects, setProjects] = useState([])
// const [visible, setVisible] = useState(6)

// useEffect(() => {
//     fetch"http://localhost:3001/allProjects"{

//     }
// })
