import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../Components/Navigation/Nav";
import Home from "../Components/Home/Home";
import Ps from "../Components/ProjectSnippet/Ps";
import React from "../Components/React/React";
import Ruby from "../Components/Ruby/Ruby";
import JavaS from "../Components/JavaScript/JavaS";
import Html from "../Components/HtmlFolder/Html";
import Cascading from "../Components/Cascading/Cascading";
import Hero from "../Components/Hero/Hero";
import AllProj from "../Components/AllProjects/AllProj";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import CV from "../Components/CV/CV";
import useScrollReveal from "../hooks/useScrollReveal";
import useScrollProgress from "../hooks/useScrollProgress";
import { FiLinkedin } from "react-icons/fi";
import { CgFigma } from "react-icons/cg";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

function App() {
  useScrollReveal();
  useScrollProgress();

  useEffect(() => {
    let raf = 0;
    const setBurn = (clientX, clientY) => {
      // bottom-right corner = 0 (hidden); moving toward the top-left
      // diagonally reveals the warm glow anchored at the bottom-right
      const dx = 1 - clientX / window.innerWidth; // 0 at right, 1 at left
      const dy = 1 - clientY / window.innerHeight; // 0 at bottom, 1 at top
      const burn = Math.min(1, Math.max(0, (dx + dy) / 2));
      document.documentElement.style.setProperty("--burn", burn.toFixed(3));
    };
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setBurn(e.clientX, e.clientY);
        raf = 0;
      });
    };
    const onLeave = () =>
      document.documentElement.style.setProperty("--burn", "0");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="App">
      {/* dark-background ambience: warm cursor-revealed glow + grid */}
      <div className="bgBurn" aria-hidden="true" />
      <div className="bgGrid" aria-hidden="true" />

      {/* reading progress along the top edge */}
      <div className="scrollProgress" aria-hidden="true" />

      <div className="appContent">
        {/* <div className="socialLinksContainer">
          <div className="socialLinks">
            <div>
              <div className="socialLinksSingle">
                <AiOutlineTwitter size={20} />
              </div>
              <div className="socialLinksSingle">
                <FiGithub size={20} />
              </div>
              <div className="socialLinksSingle">
                <FiLinkedin size={20} />
              </div>
              <div className="socialLinksSingle">
                <AiOutlineInstagram size={20} />
              </div>
              <div className="socialLinksSingle">
                <CgFigma size={20} />
              </div>
              <div className="ancor"></div>
            </div>
            <div className="socialRight">
              <div className="web">
                <h3>cpine0223@gmail.com</h3>
              </div>
              <div className="ancorRight"></div>
            </div>
          </div>
        </div> */}
        <Router>
          <Nav />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cv" element={<CV />} />
            <Route exact path="/hero" element={<Hero />} />
            <Route exact path="/ps" element={<Ps />} />
            <Route exact path="/react" element={<React />} />
            <Route exact path="/ruby" element={<Ruby />} />
            <Route exact path="/js" element={<JavaS />} />
            <Route exact path="/html" element={<Html />} />
            <Route exact path="/css" element={<Cascading />} />
            <Route exact path="/allProj" element={<AllProj />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
