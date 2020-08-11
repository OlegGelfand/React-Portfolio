import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";
// import { Link } from "react-router-dom";
import Nav from "./Nav";
import NavTop from "./NavTop";
// import Hobbies from "./Hobbies";
import ProjectFooter from "./ProjectFooter";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
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
  // const items2 = [
  //   {
  //     src:
  //       "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg",
  //     altText: "Slide 1",
  //     caption: "Slide 1",
  //     header: "Slide 1 Header",
  //     hieght: 2,
  //     key: "1",
  //   },
  //   {
  //     src:
  //       "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg",
  //     altText: "Slide 2",
  //     caption: "Slide 2",
  //     header: "Slide 2 Header",
  //     key: "2",
  //   },
  //   {
  //     src:
  //       "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg",
  //     altText: "Slide 3",
  //     caption: "Slide 3",
  //     header: "Slide 3 Header",
  //     key: "3",
  //   },
  // ];

  return (
    <div>
      <NavTop />

      <div className="background-grid">
        <div className="about-background">
          <div className="about-me-text">
            <div className="title">
              <p className="about-title">About Me</p>
            </div>
            <h4>
              <img
                width="75%"
                className="left"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1584115531/IMG_0103_tu9xon.jpg"
                alt="8"
              ></img>
              <img
                width="75%"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1584115531/IMG_0103_tu9xon.jpg"
                className="right"
                alt="11"
              ></img>
              Thank you for viewing my site, particularly this page. I've been
              fortunate enough to have fulfilled a dream at a young age. I am
              now married with 3 kids, and aim to use my life to their benefit
              as best as I am able. Building a family, is something I've always
              wanted to do, in conjunction, building in general is what drives
              me. Whether it is woodworking, watching a garden grow or{" "}
            </h4>
          </div>
        </div>
        <div className="animate">
          <div className="grids">
            <div className="rect" data-aos="fade-in">
              <h1 className="about-button">Me</h1>
              <p>Sint voluptate proident dolor esse aliquip aliqua non duis. Labore eiusmod nulla irure id sunt veniam sit dolore incididunt consequat est ad laboris. Duis nostrud et aliqua id et duis. Ullamco irure eiusmod laboris est elit labore. Duis ipsum dolor esse commodo consectetur Lorem ex elit reprehenderit.</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="900"
data-aos-easing="ease-in-out"className="rect">
        <button
          onClick={!display1 ? handleHideAboutMe1 : handleDisplayAboutMe1}
        >
          {" "}
          <h1 className="about-button">Hobbies</h1>{" "}
          
        </button>
        {display1 ? <UncontrolledCarousel items={items} /> : null}
        <p>Sint voluptate proident dolor esse aliquip aliqua non duis. Labore eiusmod nulla irure id sunt veniam sit dolore incididunt consequat est ad laboris. Duis nostrud et aliqua id et duis. Ullamco irure eiusmod laboris est elit labore. Duis ipsum dolor esse commodo consectetur Lorem ex elit reprehenderit.</p>
      </div>
            <div data-aos="zoom-in" className="rect">
              {" "}
              <button
                onClick={!display2 ? handleHideAboutMe2 : handleDisplayAboutMe2}
              >
                {" "}
                <h1 className="about-button">Family</h1>{" "}
              </button>
              {display2 ? <UncontrolledCarousel items={items} /> : null}
              <p>Sint voluptate proident dolor esse aliquip aliqua non duis. Labore eiusmod nulla irure id sunt veniam sit dolore incididunt consequat est ad laboris. Duis nostrud et aliqua id et duis. Ullamco irure eiusmod laboris est elit labore. Duis ipsum dolor esse commodo consectetur Lorem ex elit reprehenderit.</p>
            </div>
          </div>
          </div>
   
          {/* <div data-aos="fade-up" className="rect">2</div>
          <div data-aos="fade-down" className="rect">5</div>  */}
        </div>
      {/* </div> */}

      {/* <div className="about">
          <div className="about-me1"> */}

       <div className="button"></div>
      {/* </div> 
      </div>  */}
      <Nav />
      <ProjectFooter />
    </div>
  );
}

export default About;

