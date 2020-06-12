import React from "react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import NavTop from "./NavTop";
import Projects from "./Projects";
import Footer from "./Footer";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="header">
      <NavTop />
      <div class="vl"></div>
      <Nav />
      <div className="App">
        {/* <Main /> */}
        <Projects />
       
      </div>
      <Switch>
      {/* <Route exact={true} path="/" component={Main} />
          {/* <Route exact path="/footer" component={Footer} /> */}
          {/* <Route exact path="/coffeePage" component={CoffeePage} /> */}
          {/* <Route exact path="/roastersPage" component={RoastersPage} /> */}
          {/* <Route exact path="/feedback" component={Feedback} /> */}
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
