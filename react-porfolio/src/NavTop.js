import React from "react";

function NavTop() {
  return (
   <header>
      <div className="top-nav">
      {/* <img className = "top-image" src=""></img> */}
        <div className="top-item">
        
          <p> Let's build something <i class="fas fa-hammer"></i>ogether!</p>
          
        </div>

        <div className="top-item">
          <p>OLEG GELFAND</p>
        </div>
        <div className="top-item">
          <p>About <i class="fa fa-male"></i><i class="fa fa-child"></i><i class="fa fa-baby"></i><i class="fa fa-child"><i class="fa fa-female"></i></i> Me</p>
        </div>
      </div>
      </header>
  );
}

export default NavTop;
