import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import NavTop from "./NavTop";
import Hobbies from "./Hobbies";
function About() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);
  const handleDisplayAboutMe1 = () => {
    setDisplay1(false);
  };
  const handleHideAboutMe1 = () => {
    setDisplay1(true);
  };

  const handleDisplayAboutMe2 = () => {
    setDisplay2(false);
  };
  const handleHideAboutMe2 = () => {
    setDisplay2(true);
  };

  const handleDisplayAboutMe3 = () => {
    setDisplay3(false);
  };
  const handleHideAboutMe3 = () => {
    setDisplay3(true);
  };
  const handleDisplayAboutMeAll = () => {
    setDisplay1(false);
    setDisplay2(false);
    setDisplay3(false);
  };
  const handleHideAboutMeAll = () => {
    // setDisplayAll(true);
    setDisplay1(true);
    setDisplay2(true);
    setDisplay3(true);
  };
  const items = [
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      hieght: 2,
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];
  const items2 = [
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      hieght: 2,
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];

  return (
    <div>
      <NavTop />
      <div className= "about-background">
      <div className="about-me-text">
      <div className="title"><h4>About Me</h4></div>
      <h4>
        Thank you for viewing my site, particularly this page. My Family is What
        does it for me, what keeps me going.
        3 incredible kids, and an incredible Wife.</h4>
      </div>

      <div className="main-button">
        <button
          onClick={!display1 && display2 && display3 ? handleHideAboutMeAll : handleDisplayAboutMeAll}
        >
          {" "}
          <h1>The Family</h1>{" "}
        </button>
        {/* displaying all at once */}
        {displayAll ? (
          <div className="about">
            <div className="about-me">
              <div className="footer">
                <h1>Yitzi</h1> <UncontrolledCarousel items={items} />
              </div>
            </div>
            <div className="about-me">
              <div className="footer">
                <h1>Sara</h1> <UncontrolledCarousel items={items} />
              </div>
            </div>
            <div className="about-me">
              <div className="footer">
                <h1>Pinny</h1> <UncontrolledCarousel items={items} />
              </div>
            </div>
            
          </div>
        ) : null}
      </div>
      </div>
      {/* displaying all at once */}
      <div className="about">
        <div className="about-me">
        <div className="button">
            <button
              onClick={!display1 ? handleHideAboutMe1 : handleDisplayAboutMe1}
            >
              {" "}
              <h1>Yitzi</h1>{" "}
            </button>
            {display1 ? <UncontrolledCarousel items={items} /> : null}
          </div>
        </div>
        <div className="about-me">
        <div className="button">
            <button
              onClick={!display2 ? handleHideAboutMe2 : handleDisplayAboutMe2}
            >
              {" "}
              <h1>Sara</h1>{" "}
            </button>
            {display2 ? <UncontrolledCarousel items={items2} /> : null}
          </div>
        </div>
        <div className="about-me">
          <div className="button">
            <button 
              onClick={!display3 ? handleHideAboutMe3 : handleDisplayAboutMe3}
            >
              {" "}
              <h1>Pinny</h1>{" "}
            </button>
            {display3 ? <UncontrolledCarousel items={items} /> : null}
          </div>
        
      </div>
      </div>
      <Hobbies />
      <Nav />
    </div>
    
  );
}

export default About;
