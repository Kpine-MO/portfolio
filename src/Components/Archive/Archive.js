import React, { useEffect, useState } from 'react'
import "./Archive.css"
import ArchiveDisplay from '../ArchiveDisplay/ArchiveDisplay'

function Archive() {
    const [ allprojects, setAllProjects] = useState([])
     
    useEffect(() => {
        fetch("http://localhost:3001/allProjects")
        .then((res) => res.json())
        .then((data)=> setAllProjects(data))
    },[])
  return (
    <div className='archiveContainer'>
      <h1>archive</h1>
      <p>A full list of projects i have worked on</p>
    <table>
        <tr className='headRow'>
            <th className='headData year'>year</th>
            <th className='headData titleGrow'>title</th>
            <th className='headData made'>made at</th>
            <th className='headData build'>build with</th>
            <th className='headData link'>link</th>
        </tr>
        <tr>
        {
        allprojects.map((project,i) => {
            return <ArchiveDisplay
            key={i}
            title={project.title}
            year={project.year}
            link={project.link}
            madeAt={project.madeAt}
            buildWith={project.buildWith}
            />
        })
    }
        </tr>
    </table>
    </div>
  )
}

export default Archive
