import React from "react";
import "./App.css";
import Resume from "./Resume";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Home from "./Home";
import Skills from "./Skills";
import { Link} from "react-router";
import { Switch, Route } from "react-router";


function App() {
  return (
    <div className="header">
       <Switch>
      <Route exact={true} path="/" component={Home} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/projects" component={Projects} />
         
          {/* <Route exact path="/feedback" component={Feedback} /> */}
      </Switch> 
    
     {/* <Projects /> */}
      <div class="vl"></div>
      {/* <Nav /> */}
      {/* <div className="App">
        <Projects />
       
      </div> */}
     
     {/* <Resume /> */}
     
      <Footer />
    </div>
  );
}

export default App;
