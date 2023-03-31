import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Ps from '../ProjectSnippet/Ps'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Archive from '../Archive/Archive'
import "./Home.css"
import Contact from '../Contact/Contact'
import AllProj from '../AllProjects/AllProj'
import {Animated} from "react-animated-css";

function Home() {

  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className='home'>
      <button  onClick={() => setShowMenu(!showMenu)}></button>
      {
        showMenu ? <div id='hide' className='sidePushMenu'>
        <div className='homeHeaderContent'>
          <button className='closeBtn' onClick={() => setShowMenu(!showMenu)}>X</button>
          <h4 className='homeHeader'>Project Categories</h4>
        </div>
         <ul>
          <li onClick={() => setShowMenu(!showMenu)}>React Js</li>
          <li onClick={() => setShowMenu(!showMenu)}>JavaScript</li>
          <li onClick={() => setShowMenu(!showMenu)}>Ruby</li>
          <li onClick={() => setShowMenu(!showMenu)}>CSS</li>
          <li onClick={() => setShowMenu(!showMenu)}>HTML</li>
         </ul>

         {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>ShowCase</li>
          <li>Contact</li>
         </ul> */}
      </div> : <div  className='sidePushMenu' >
      <button className='closeBtn' onClick={() => setShowMenu(!showMenu)}>X</button>
        <h4 className='homeHeader'>Project Categories</h4>
         <ul>
          <li>React Js</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>CSS</li>
          <li>HTML</li>
         </ul>

         {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>ShowCase</li>
          <li>Contact</li>
         </ul> */}
      </div>
      }
      <Hero/>
      <About/>
      <Skills/>
      <AllProj/>
      <Contact/>
    </div>
  )
}

export default Home
