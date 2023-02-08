import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Nav from '../Components/Navigation/Nav';
import Home from '../Components/Home/Home';
import Ps from '../Components/ProjectSnippet/Ps';
import React from '../Components/React/React';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
     <Nav/>
     {/* <Hero/>
     <Ps/> */}
     <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='ps' element={<Ps/>}/>
    <Route exact path='react' element={<React/>}/>
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
