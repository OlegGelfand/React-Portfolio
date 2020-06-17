import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Resume from "./Resume";
function NavTop() {
  return (
    <header>
      <div className="top-nav">
        {/* <img className = "top-image" src=""></img> */}
        <div className="top-item">
          <p>
            {" "}
            Let's build something <i class="fas fa-hammer"></i>ogether!
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
              About <i class="fa fa-male"></i>
              <i class="fa fa-child"></i>
              <i class="fa fa-baby"></i>
              <i class="fa fa-child">
                <i class="fa fa-female"></i>
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
