import React from "react";
import { Link } from "react-router-dom";
// import Skills from "./Skills";
// import Resume from "./Resume";
function NavTop() {
  return (
    <header>
      <div className="top-nav">
        {/* <img className = "top-image" src=""></img> */}
        <div className="top-item">
          <p>
            {" "}
            Let's build something <i className="fas fa-hammer"></i>ogether!
          </p>
        </div>

        <div className="top-item">
          <Link to="/">
            <p>OLEG GELFAND</p>
          </Link>
        </div>
        <div className="top-item">
        <Link to="/projects">
          <p> My Projects</p>
        </Link>
        </div>
        <div className="top-item">
          <Link to="/aboutme">
            <p>
              About <i className="fa fa-male"></i>
              <i className="fa fa-child"></i>
              <i className="fa fa-baby"></i>
              <i className="fa fa-child">
                <i className="fa fa-female"></i>
              </i>{" "}
              Me
            </p>
          </Link>
          {/* <Skills /> */}
        </div>
      </div>
    </header>
  );
}

export default NavTop;
