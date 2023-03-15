import React from "react";
import "./About.css";
import { MdSchool } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutHolder">
        <div className="headerWrap">
          <h1 className="experienceTitle">experience</h1>
          <div className="underLine"></div>
          <p className="phrase">
            Thanks to <b className="emphasis">Mastercard Access Program</b>, I've had the privilege of
            completing six part six-month course as a Software Engineer
            at <b className="emphasis">Moringa School</b> <b className="emphasis">FlatIron</b> curriculum. Starting in February 20th
            2023, I'll be joining the <b className="emphasis">ALX</b> programm as a Software Engineer for
            a deeper understanding of the course!
          </p>
        </div>
        <div className="arrow">
          <div className="tree">
            <div className="block">
              <div className="start">
                <GiGraduateCap size={25} />
              </div>
              <div className="contentBlock">
                <div>
                  <h1 className="contentH1">
                    software engineering access program
                  </h1>
                  <h2 className="contentH2">moringa school</h2>
                  <div className="message">
                    <p className="contentP">
                      Candidate for Bachelor of Science in Information Science
                      with a concentration in Human Computer Interaction (HCI)
                      and a minor in Interaction Design. Graduating in May 2018.
                    </p>
                  </div>
                  <div className="rightTriangle"></div>
                </div>
              </div>
            </div>
            <div className="block blockEven">
              <div className="start">
                <GiGraduateCap size={25} />
              </div>
              <div className="contentBlockEven">
                <div>
                  <h1 className="contentH1">
                    software engineering access program
                  </h1>
                  <h2 className="contentH2">moringa school</h2>
                  <div className="message">
                    <p className="contentP">
                      Candidate for Bachelor of Science in Information Science
                      with a concentration in Human Computer Interaction (HCI)
                      and a minor in Interaction Design. Graduating in May 2018.
                    </p>
                  </div>
                  <div className="rightTriangleEven"></div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="start">
                <GiGraduateCap size={25} />
              </div>
              <div className="contentBlock">
                <div>
                  <h1 className="contentH1">
                    software engineering access program
                  </h1>
                  <h2 className="contentH2">moringa school</h2>
                  <div className="message">
                    <p className="contentP">
                      Candidate for Bachelor of Science in Information Science
                      with a concentration in Human Computer Interaction (HCI)
                      and a minor in Interaction Design. Graduating in May 2018.
                    </p>
                  </div>
                  <div className="rightTriangle"></div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="start">
                <GiGraduateCap size={25} />
              </div>
              <div className="contentBlockEven">
                <div>
                  <h1 className="contentH1">
                    software engineering access program
                  </h1>
                  <h2 className="contentH2">moringa school</h2>
                  <div className="message">
                    <p className="contentP">
                      Candidate for Bachelor of Science in Information Science
                      with a concentration in Human Computer Interaction (HCI)
                      and a minor in Interaction Design. Graduating in May 2018.
                    </p>
                  </div>
                  <div className="rightTriangleEven"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="triangle"></div>
        </div>
      </div>
      <button className="aboutBtn">view resume</button>
      {/* <div className='aboutContent'>
        <h1 className='aboutH'>about me</h1>
        <p className='aboutP'>Taking the time to ask highly specific questions in a design interview ensures that you end up in a role that satisfies your personal growth, creativity, and career goals. To help you land your next best job, acclaimed Product Designer & Career Coach, Helen Tran, shares three highly uncommon interview questions every </p>
        <button className='aboutBtn'>Curriculum Vitae</button>
      </div>
      <div className='blur'>
      
      </div>
      <div className='aboutRight'>
      <div className='aboutIcons'><MdSchool size={40}/><h4 className='title'>education</h4><li className='data'>School</li></div>
      <div className='aboutIcons'><BsCalendarDateFill size={40}/><h4 className='title'>experience</h4></div>
      <div className='aboutIcons'><GiSkills size={40}/><h4 className='title'>skills</h4></div> */}
      {/* </div> */}
    </div>
  );
}

export default About;
