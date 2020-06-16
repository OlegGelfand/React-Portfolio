import React from "react";
import App from "./App";
import About from "./About";
import NavTop from "./NavTop";
import Resume from "./Resume";
function Main() {
    return (
      <div>
  <div className="boxes">
    <div className="box1"><h1></h1></div>
    <div className="box2"><h1>two</h1></div>
    <div className="box3"><h1>three</h1></div>
    <div className="box4"><h1>four</h1></div>
    <div className="box5"><h1>five</h1></div>
    <div className="box6"><h1></h1></div>
  </div>

  
  {/* <Switch>
      <Route exact={true} path="/" component={NavTop} />
          <Route exact path="/aboutme" component={About} />
          {/* <Route exact path="/coffeePage" component={CoffeePage} /> */}
          {/* <Route exact path="/roastersPage" component={RoastersPage} /> */}
          {/* <Route exact path="/feedback" component={Feedback} /> */}
      {/* </Switch>   */}
  </div>
    );
}

export default Main;
