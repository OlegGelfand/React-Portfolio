import React from "react";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import ProjectDescription from "./ProjectDescription";
import { Switch, Route } from "react-router";
function Main() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:title" component={ProjectDescription} />
        <Route
          exact
          path="/projectdescription"
          component={ProjectDescription}
        />
      </Switch>
    </div>
  );
}

export default Main;
