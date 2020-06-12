import React, { useState } from "react";

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
    
      Footer
      </footer>
  );
}

export default Footer;
