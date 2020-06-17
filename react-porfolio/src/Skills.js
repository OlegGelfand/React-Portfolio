import React, { useState } from "react";

function Skills() {
  return (
      <div className="main-skills-container">
          <p className="skills-title"><h7>skills</h7></p>
     
    <div className="skills-container">
        
      <div className="skills">
        <h3 className="title">Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML5/CSS3</li>
          <li>SQL</li>
          <li>ES6</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Libraries</h3>
        <ul>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>Express</li>
          <li>Node</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Databases</h3>
        <ul>
          <li>PostreSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Collaboration</h3>
        <ul>
          <li>Slack</li>
          <li>Zoom</li>
          <li>Skype</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Skills;
