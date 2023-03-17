import React from 'react'
import Hero from '../Hero/Hero'
import Ps from '../ProjectSnippet/Ps'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Archive from '../Archive/Archive'
import "./Home.css"
import Contact from '../Contact/Contact'
import AllProj from '../AllProjects/AllProj'

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Skills/>
      <AllProj/>
      <Contact/>
    </div>
  )
}

export default Home
