import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsPlay } from "react-icons/bs";
import "./About.css";

function About() {
  const flexStyle = {
    color: "rgb(37, 223, 207)",
    fontSize: "small",
    fontWeight: "lighter",
  };

  const flexStyle2 = {
    color: "rgb(37, 223, 207)",
    fontSize: "x-large",
    fontWeight: "lighter",
  };
  return (
    <div className="aboutMeContainer">
      <div className="holder aboutMeHolder">
        <div>
          <div className="aboutMe">
            <div className="flex">
              <div>
                <h2 className="numbers">1.</h2>
              </div>
              <div className="topAbout">
                <h3 className="allProjH1">About Me</h3>
                <div className="spanStyle spanStyleAbout">
                  <BsPlay />
                </div>
              </div>
            </div>
            <div className="aboutMeFlex">
              <div className="aboutLeftCont">
                <p className="summaryMe bigParagraph">
                  Hello! My name is Brittany and I enjoy creating things that
                  live on the internet. My interest in web development started
                  back in 2012 when I decided to try editing custom Tumblr
                  themes — turns out hacking together a custom reblog button
                  taught me a lot about HTML & CSS!
                  <br />
                  <br />
                  Fast-forward to today, and I’ve had the privilege of working
                  at an <b className="panelBold">advertising agency</b>,<b className="panelBold">a start-up </b>, <b className="panelBold">a huge corporation</b>, and
                  <b className="panelBold">a student-led design studio</b>. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at <b className="panelBold">Upstatement</b>  for a variety of clients.
                  <br />
                  <br />
                  I also recently <b className="panelBold">launched a course</b> that covers everything you
                  need to build a web app with the Spotify API using Node &
                  React.
                  <br />
                  <br />
                  Here are a few technologies I’ve been working with recently:
                </p>

                <div className="flex flexMore">
                  <div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">React</p>
                    </div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">Javascript</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">Ruby On Rails</p>
                    </div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">Node.js</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">Figma</p>
                    </div>
                    <div className="flex">
                      <BsPlay style={flexStyle} />{" "}
                      <p className="flexParagraph">Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutImg">
                <img
                  className="aboutProfile"
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  style={{
                    width: "270px",
                    height: "290px",
                    borderRadius: "5px",
                    position: "relative",
                    zIndex: "10"
                  }}
                />
                <div className="imgBorder"></div>{" "}
              </div>
            </div>
          </div>

          <Tabs
            className="tabs"
            defaultIndex={1}
            onSelect={(index) => console.log(index)}
          >
            <div className="flex">
              <h2 className="tabNumber">1.1.</h2>
              <div className="styleDiv pull">
                <h3 className="education ">education & skills</h3>
                <div className="spanStyle spanStylePanel"></div>
              </div>
            </div>

            <div className="reactTabs">
              <TabList className="list">
                <Tab className="tabList">Self Taught</Tab>
                <Tab className="tabList">Moringa School</Tab>
                <Tab className="tabList">ALX</Tab>
                <Tab className="tabList">Hard Skills</Tab>
                <Tab className="tabList">Soft Skills</Tab>
              </TabList>
              <div className="tabContent">
                <TabPanel>
                  <h3 className="panelHeader">
                    YouTube && <b className="panelBold">@ w3Schools</b>
                  </h3>
                  <p className="panelDate">November 2021 - present</p>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      Had a long and hard look of the{" "}
                      <b className="panelBold">w3Schools</b> documentation on
                      HTML and CSS{" "}
                    </p>
                  </div>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      After going over the documentation i went over a couple of
                      YouTube tutorials which helped me develope different
                      points of view when tackling a problem.
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h3 className="panelHeader">
                    Access Programe<b className="panelBold">@ Moringa School</b>
                  </h3>
                  <p className="panelDate">November 2021 - present</p>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      Had a long and hard look of the{" "}
                      <b className="panelBold">w3Schools</b> documentation on
                      HTML and CSS
                    </p>
                  </div>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      Had a long and hard look of the{" "}
                      <b className="panelBold">w3Schools</b> documentation on
                      HTML and CSS
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h3 className="panelHeader">
                    <b className="panelBold">ALX</b> Program
                  </h3>
                  <p className="panelDate">November 2021 - present</p>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      Had a long and hard look of the{" "}
                      <b className="panelBold">w3Schools</b> documentation on
                      HTML and CSS
                    </p>
                  </div>
                  <div className="flex">
                    <BsPlay className="panelIcon" style={flexStyle2} />
                    <p className="panelExperience">
                      {" "}
                      Had a long and hard look of the{" "}
                      <b className="panelBold">w3Schools</b> documentation on
                      HTML and CSS
                    </p>
                  </div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";
// import "./About.css";
// import { MdSchool } from "react-icons/md";
// import { GiGraduateCap } from "react-icons/gi";
// import { BsCalendarDateFill } from "react-icons/bs";

// function About() {
//   return (
//     <div className="aboutContainer">
//       <div className="aboutHolder">
//         <div className="headerWrap">
//           <h1 className="experienceTitle">experience</h1>
//           <div className="underLineHolder">
//           <div className="underLine"></div>
//           </div>
//           <p className="phrase">
//             Thanks to <b className="emphasis">Mastercard Access Program</b>, I've had the privilege of
//             completing six part six-month course as a Software Engineer
//             at <b className="emphasis">Moringa School</b> <b className="emphasis">FlatIron</b> curriculum. Starting in February 20th
//             2023, I'll be joining the <b className="emphasis">ALX</b> programm as a Software Engineer for
//             a deeper understanding of the course!
//           </p>
//         </div>
//         <div className="arrow">
//          <div className="arrowRelative">
//          <div className="tree">
//             <div className="block">
//               <div className="start">
//                 <GiGraduateCap size={25} />
//               </div>
//               <div className="contentBlock">
//                 <div>
//                   <h1 className="contentH1">
//                     software engineering access program
//                   </h1>
//                   <h2 className="contentH2">moringa school</h2>
//                   <div className="message">
//                     <p className="contentP">
//                       Candidate for Bachelor of Science in Information Science
//                       with a concentration in Human Computer Interaction (HCI)
//                       and a minor in Interaction Design. Graduating in May 2018.
//                     </p>
//                   </div>
//                   <div className="rightTriangle"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="block blockEven">
//               <div className="start">
//                 <GiGraduateCap size={25} />
//               </div>
//               <div className="contentBlockEven">
//                 <div>
//                   <h1 className="contentH1">
//                     software engineering access program
//                   </h1>
//                   <h2 className="contentH2">moringa school</h2>
//                   <div className="message">
//                     <p className="contentP">
//                       Candidate for Bachelor of Science in Information Science
//                       with a concentration in Human Computer Interaction (HCI)
//                       and a minor in Interaction Design. Graduating in May 2018.
//                     </p>
//                   </div>
//                   <div className="rightTriangleEven"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="block">
//               <div className="start">
//                 <GiGraduateCap size={25} />
//               </div>
//               <div className="contentBlock">
//                 <div>
//                   <h1 className="contentH1">
//                     software engineering access program
//                   </h1>
//                   <h2 className="contentH2">moringa school</h2>
//                   <div className="message">
//                     <p className="contentP">
//                       Candidate for Bachelor of Science in Information Science
//                       with a concentration in Human Computer Interaction (HCI)
//                       and a minor in Interaction Design. Graduating in May 2018.
//                     </p>
//                   </div>
//                   <div className="rightTriangle"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="block">
//               <div className="start">
//                 <GiGraduateCap size={25} />
//               </div>
//               <div className="contentBlockEven">
//                 <div>
//                   <h1 className="contentH1">
//                     software engineering access program
//                   </h1>
//                   <h2 className="contentH2">moringa school</h2>
//                   <div className="message">
//                     <p className="contentP">
//                       Candidate for Bachelor of Science in Information Science
//                       with a concentration in Human Computer Interaction (HCI)
//                       and a minor in Interaction Design. Graduating in May 2018.
//                     </p>
//                   </div>
//                   <div className="rightTriangleEven"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="triangle"></div>
//          </div>
//         </div>
//       </div>
//       <button className="aboutBtn">view resume</button>
//       {/* <div className='aboutContent'>
//         <h1 className='aboutH'>about me</h1>
//         <p className='aboutP'>Taking the time to ask highly specific questions in a design interview ensures that you end up in a role that satisfies your personal growth, creativity, and career goals. To help you land your next best job, acclaimed Product Designer & Career Coach, Helen Tran, shares three highly uncommon interview questions every </p>
//         <button className='aboutBtn'>Curriculum Vitae</button>
//       </div>
//       <div className='blur'>

//       </div>
//       <div className='aboutRight'>
//       <div className='aboutIcons'><MdSchool size={40}/><h4 className='title'>education</h4><li className='data'>School</li></div>
//       <div className='aboutIcons'><BsCalendarDateFill size={40}/><h4 className='title'>experience</h4></div>
//       <div className='aboutIcons'><GiSkills size={40}/><h4 className='title'>skills</h4></div> */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default About;
