import React from 'react'
import "./Skills.css"
import { GrReactjs } from "react-icons/gr"
import { VscProject } from "react-icons/vsc"
import { BsTools } from "react-icons/bs"
import { TbBulb } from "react-icons/tb"
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io"
import { SiRubygems, SiCsswizardry } from "react-icons/si"
import { MdOutlineSettingsSuggest } from "react-icons/md"
import { Link } from 'react-router-dom'

function Skills() {

 const icons = {
  color: "#8892b0"
 }
  return (
    <div className='skillsContainer'>
      <h1 className='skillsMain'>skills</h1>
      <div className='skillsUnderLine'></div>
      <div className='skillsLayer1'>
        <div className='development'>
          <div className='skillsIcon settingsIcon'><MdOutlineSettingsSuggest size={30}/></div>
          <h3 className='developmentH3 skillsH3'>development</h3>
          <div className='developmentCells'>
            <div className='cells'>CSS3</div>
            <div className='cells'>HTMLl5</div>
            <div className='cells'>React.js</div>
            <div className='cells'>Ruby</div>
            <div className='cells'>JavaScript</div>
            <div className='cells'>Node.js</div>
            <div className='cells'>mySQL</div>
            <div className='cells'>SQL</div>
            <div className='cells'>C</div>
          </div>
        </div>
        <div className='skillsLayer1right'>
          <div className='projectsDone'>
            <div className='skillsIcon projectsIcon'><VscProject size={20}/></div>
            <h3 className='projectsDoneH3 skillsH3'>projects done in</h3>
            <div className='projectsDoneCells'>
              <div className='pDCells'>
                <Link to="/react"><GrReactjs size={35}/></Link>
              </div>
              <div className='pDCells'><Link to="/ruby"><SiRubygems size={35}/></Link></div>
              <div className='pDCells'><Link to="/js"><IoLogoJavascript size={35}/></Link></div>
              <div className='pDCells'><Link to="/html"><IoLogoHtml5 size={35}/></Link></div>
              <div className='pDCells'><Link to="/html"><SiCsswizardry size={35}/></Link></div>
            </div>
          </div>
         <div className='skillsFlex'>
         <div className='tools'>
            <div className='skillsIcon toolsIcon'><BsTools size={20}/></div>
            <h3 className='toolsH3 skillsH3'>tools</h3>
            <ul>
              <li>git + github</li>
              <li>command line</li>
              <li>chrome DevTools</li>
              <li>postman</li>
              <li>figma</li>
            </ul>
          </div>
          <div className='knowledge'>
            <div className='skillsIcon bulbIcon'><TbBulb size={30}/></div>
            <h3 className='knowledgeH3 skillsH3'>knowledge</h3>
            <ul>
              <li>ECMAScript 7</li>
              <li>custom CSS</li>
            </ul>
          </div>
         </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Skills
