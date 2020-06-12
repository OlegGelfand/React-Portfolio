import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
   
      <div className="nav">
          {/* <Link to="/footer">
                    <p>footer</p>
                  </Link> */}
        <div className="item1">
           {/* <Link to="/footer">
                    <p>footer</p>
                  </Link> */}
          <p className="box-1">One</p>
        </div>
        <div className="item1">
          <p>Two</p>
        </div>
        <div className="item1">
          <p>Three</p>
        </div>
        
      </div>
   
  );
}

export default Nav;
