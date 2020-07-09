import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
// import { Link } from "react-router-dom";
import Nav from "./Nav";
import NavTop from "./NavTop";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
function About() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  // const [displayAll, setDisplayAll] = useState(false);
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
      <div className = "background-grid">
      <div className= "about-background">
        
      <div className="about-me-text">
        
      <div className="title"><p className="about-title">About Me</p></div>
      <h4><img width="75%" className="left" src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1584115531/IMG_0103_tu9xon.jpg" alt="8"></img><img width="75%" src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1584115531/IMG_0103_tu9xon.jpg" className="right" alt="11"></img>
       Thank you for viewing my site, particularly this page.
      I've been fortunate enough to have fulfilled a dream at a young age.
      I am now married with 3 kids, and aim to use my life to their benefit as best as I am able.
      Building a family, is something I've always wanted to do, in conjunction, building in general is what drives me. Whether it is woodworking, watching a garden grow or </h4>
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
          <div className="about-me">
          <div className="button">
            <button 
              onClick={!display1 && !display2 && !display3 ? handleHideAboutMeAll : handleDisplayAboutMeAll }
            >
              {" "}
              <h1>Family</h1>{" "}
            </button>
            {/* {displayAll ? <UncontrolledCarousel items={items} /> : null} */}
          </div>
          </div>
      </div>
      
      </div>
      <Hobbies /> 
      <Nav />
      <Footer />

    </div>
    
  );
}

export default About;
