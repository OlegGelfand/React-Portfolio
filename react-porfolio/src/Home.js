import React, { useState } from "react";
// import Resume from "./Resume";
import About from "./About";
import NavTop from "./NavTop";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import Resume from "./Resume";

function Home() {

  return (
   <div>
       Route to here
       
       <NavTop />
       <Skills />
      <Resume /> 
       <Footer /> 
    
       
   </div>
  );
}

export default Home;