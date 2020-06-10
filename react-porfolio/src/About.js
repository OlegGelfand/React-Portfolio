import React, {useState} from "react";

function About()  {
  const [display, setDisplay] = useState(true);

const handleDisplayAboutMe = ()=>  {
   setDisplay(false)
}
const handleHideAboutMe = ()=>  {
  setDisplay(true)
}
console.log(display)

  return (
    <div className="about-me">
    
     
      {/* {
        display?
        <div>i did it</div>:null
        
      } */}
      {/* <button onClick={!display ? handleHideAboutMe : handleDisplayAboutMe}>Click me </button> */}
      <div className="about">
       
       <div className ="square1">Yitzi
       <img className="about-img"  src = "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg"></img>
       </div>
       <div className ="square1">Me
       <p>This is me!</p> <p>This is where my mind goes when things are tough,</p><p> this is where my mind goes when things are great!</p>
       </div>
       <div className ="square1">Sara
       <img className="about-img" src ="https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg"></img>
       </div>
       <div className ="square1">Pinny
       <img className="about-img" src ="https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg"></img>
      </div>
      <div className ="square1">Tali
       {/* <img src ="https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg"></img> */}
      </div>
      <div className ="square1">Tali
       <img className="about-img" src ="https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg"></img>
      </div>
      </div>
      </div>
 
  );
}

export default About;
