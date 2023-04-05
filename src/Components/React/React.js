import React, { useState, useEffect } from 'react'
import Psc from '../ProjectSnippetCard/Psc'
import Psc2 from '../ProjectSnippetCard/Psc2'


function ProjectReact() {
    
    const [topProjects, setTopProjects] = useState([])

    useEffect(() => {
        fetch("https://kpine-mo.github.io/Data/db.json")
        .then((res) => res.json())
        .then((data)=> {
          setTopProjects(data.topProjects)
          console.log(data.topProjects)
        })
    },[])
  return (
    <div>
      {
        topProjects.map((project,i) => {
          if(i%2 == 0){
            return <Psc2
            key={i}
            name={project.name}
            github={project.github}
            imgUrl={project.imgUrl}
            descript={project.description}
            technologies={project.technologies}
            />
          }else{
            return <Psc
            key={i}
            name={project.name}
            github={project.github}
            imgUrl={project.imgUrl}
            descript={project.description}
            technologies={project.technologies}
            />
          }
        })
      }
    </div>
  )
}

export default ProjectReact
