import React, { useState, useEffect } from 'react'
import Psc from '../ProjectSnippetCard/Psc'
import Psc2 from '../ProjectSnippetCard/Psc2'


function ProjectReact() {
    
  const [topProjects, setTopProjects] = useState([]);

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
         link: "https://project002-ivory.vercel.app"
     }
 ]

  // useEffect(() => {
  //     fetch("https://kpine-mo.github.io/Data/db.json")
  //     .then((res) => res.json())
  //     .then((data)=> {
  //       console.log(data.topProjects); // Log the fetched data
  //       setTopProjects(data.topProjects);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // },[]);

  // console.log("topProjects:", topProjects)

  return (
    <div>
      {
        array.map((project,i) => {
          if(i%2 == 0){
            return <Psc2
            key={i}
            name={project.name}
            github={project.github}
            imgUrl={project.imgUrl}
            descript={project.description}
            technologies={project.technologies}
            link={project.link}
            />
          }else{
            return <Psc
            key={i}
            name={project.name}
            github={project.github}
            imgUrl={project.imgUrl}
            descript={project.description}
            technologies={project.technologies}
            link={project.link}
            />
          }
        })
      }
    </div>
  )
}

export default ProjectReact
