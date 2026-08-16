import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import AllProj from "../AllProjects/AllProj";
import Contact from "../Contact/Contact";
import References from "../References/References";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <Skills />
      {/* <AllProj /> */}
      <Contact />
      <References />
    </main>
  );
}

export default Home;
