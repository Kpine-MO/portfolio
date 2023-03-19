import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Nav from "../Components/Navigation/Nav";
import Home from "../Components/Home/Home";
import Ps from "../Components/ProjectSnippet/Ps";
import React from "../Components/React/React";
import Footer from "../Components/Footer/Footer";
import Ruby from "../Components/Ruby/Ruby";
import JavaS from "../Components/JavaScript/JavaS";
import Html from "../Components/HtmlFolder/Html";
import Cascading from "../Components/Cascading/Cascading";
import Hero from "../Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/hero' element={<Hero/>}/>
          <Route exact path="/ps" element={<Ps/>}/>
          <Route exact path="/react" element={<React/>}/>
          <Route exact path="/ruby" element={<Ruby/>}/>
          <Route exact path="/js" element={<JavaS/>}/>
          <Route exact path="/html" element={<Html/>}/>
          <Route exact path="/css" element={<Cascading/>}/>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
