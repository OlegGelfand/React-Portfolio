import React, { useState } from "react";
function Resume() {

  return (
   <div className="resume">
     <ul className="my-docs">
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i class="far fa-file"><span className="res"> Resume </span></i></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing">Portfolio</a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i class="fab fa-linkedin"><span className="linked-in"> Linked In</span></i></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i class="fab fa-github"><span className="github"> Github</span></i></a></li>
 </ul> 
   </div>
  );
}

export default Resume;
