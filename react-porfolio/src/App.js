import React from "react";
import "./App.css";
import Resume from "./Resume";
// import About from "./About";
import NavTop from "./NavTop";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import { Link} from "react-router";
import { Switch, Route } from "react-router";


function App() {
  return (
    <div className="header">
       <Switch>
      <Route exact={true} path="/" component={NavTop} />
          {/* <Route exact path="/aboutme" component={About} /> */}
          <Route exact path="/projects" component={Projects} />
         
          {/* <Route exact path="/feedback" component={Feedback} /> */}
      </Switch> 
    
     <Skills /> 
      <div class="vl"></div>
      {/* <Nav /> */}
      {/* <div className="App">
        <Projects />
       
      </div> */}
     
     <Resume />
     
      <Footer />
    </div>
  );
}

export default App;
