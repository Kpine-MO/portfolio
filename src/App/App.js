import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
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
import { FiLinkedin } from "react-icons/fi";
import { CgFigma } from "react-icons/cg";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";


function App() {
  return (
    <div className="App">
      <div className="socialLinksContainer">
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
         </div>
      <Router>
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/skills' element={<Skills/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/hero' element={<Hero/>}/>
          <Route exact path="/ps" element={<Ps/>}/>
          <Route exact path="/react" element={<React/>}/>
          <Route exact path="/ruby" element={<Ruby/>}/>
          <Route exact path="/js" element={<JavaS/>}/>
          <Route exact path="/html" element={<Html/>}/>
          <Route exact path="/css" element={<Cascading/>}/>
          <Route exact path="/allProj" element={<AllProj/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
