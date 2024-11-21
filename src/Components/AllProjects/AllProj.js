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
    <div className="allProjContainer hideOverflow">
      <div className="center">
      <div className="allProjHeader">
        <div>
        <h1 className="allProjH1">Noteworthy Projects</h1>
        <p className="pFlex">view my archive</p>
        </div>
      </div>
      <div className="child hideOverflow">
        {array.slice(0, visible).map((item, i) => {
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
                  <a href={item.link} target="_blank" style={{color: "white"}}>
                   <FiExternalLink className="techIconTwo" size={18} /> 
                  </a>
                  
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
