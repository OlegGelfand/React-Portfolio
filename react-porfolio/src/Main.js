import React from "react";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import ProjectListItem from "./ProjectListItem";
// import { Link } from "react-router";
import { Switch, Route } from "react-router";
function Main() {
    return (
      <div>
    <Switch>
      <Route exact={true} path="/" component={Home} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:title" component={ProjectListItem} /> 
        
      </Switch> 
  

  </div>
    );
}

export default Main;
