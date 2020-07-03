import React from "react";
function Resume() {

  return (
   <div className="resume">
     <h1>My Pages</h1>
     <ul className="my-docs">
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="far fa-file"><span className="res"> Resume </span></i></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><p className="portfolio" >P<span className="port">ortfolio</span></p></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="fab fa-linkedin"><span className="linked-in"> Linked In</span></i></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="fab fa-github"><span className="github"> Github</span></i></a></li>
 </ul> 
   </div>
  );
}

export default Resume;
