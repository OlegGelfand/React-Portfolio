import React, { useState } from "react";
import About from "./About";
import { Link } from "react-router-dom";
function Footer() {
    const [display, setDisplay] = useState(false);

    const handleDisplayAboutMe = () => {
      setDisplay(false);
    };
    const handleHideAboutMe = () => {
      setDisplay(true);
    };
  return (
   <footer>
      <div className="footer">
      {/* <Link to="/main">
                    <p>main</p>
                  </Link> */}
      <button onClick={!display ? handleHideAboutMe : handleDisplayAboutMe}>
          {" "}
          <h1>about me</h1>{" "}
        </button>
        {display ? (
          <div>
            <About />
          </div>
        ) : null}
      </div>
      </footer>
  );
}

export default Footer;
