import React, { useState, useEffect } from 'react'
import Psc from '../ProjectSnippetCard/Psc'


function ProjectReact() {
    
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
            return <Psc
            key={i}
            name={project.name}
            imgUrl={project.imgUrl}
            />
        })
      }
    </div>
  )
}

export default ProjectReact
