import React from "react";
import { UncontrolledCarousel } from 'reactstrap';

function About()  {
   
  const items = [
    {
      src: 'https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      hieght:2,
      key: '1'
    },
    {
      src: 'https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: 'https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3',
    }
  ];

  return (
    <div className="about-me">
    <UncontrolledCarousel items={items} />
      </div>
 
  );
}

export default About;
