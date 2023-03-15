import React, { useState, useEffect } from 'react'
import Psc from '../ProjectSnippetCard/Psc'
import Psc2 from '../ProjectSnippetCard/Psc2'


function Cascading() {
    
    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/React")
        .then((res) => res.json())
        .then((data)=> setAllProjects(data))
    },[])
  return (
    <div>
      {
        allProjects.map((project,i) => {
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

export default Cascading