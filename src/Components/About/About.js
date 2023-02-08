import React from 'react'
import "./About.css"
import { MdSchool } from "react-icons/md"
import { GiSkills } from "react-icons/gi"
import { BsCalendarDateFill } from "react-icons/bs"

function About() {
  return (
    <div className='aboutContainer'>
      <div className='aboutContent'>
        <h1 className='aboutH'>about me</h1>
        <p className='aboutP'>Taking the time to ask highly specific questions in a design interview ensures that you end up in a role that satisfies your personal growth, creativity, and career goals. To help you land your next best job, acclaimed Product Designer & Career Coach, Helen Tran, shares three highly uncommon interview questions every </p>
        <button className='aboutBtn'>Curriculum Vitae</button>
      </div>
      <div className='blur'>
      
      </div>
      <div className='aboutRight'>
      <div className='aboutIcons'><MdSchool size={40}/><h4 className='title'>education</h4><li className='data'>School</li></div>
      <div className='aboutIcons'><BsCalendarDateFill size={40}/><h4 className='title'>experience</h4></div>
      <div className='aboutIcons'><GiSkills size={40}/><h4 className='title'>skills</h4></div>
      </div>
    </div>
  )
}

export default About
