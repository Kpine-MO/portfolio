import React from 'react'
import Hero from '../Hero/Hero'
import Ps from '../ProjectSnippet/Ps'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Archive from '../Archive/Archive'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      {/* <Archive/> */}
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
