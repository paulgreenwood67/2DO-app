import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//Navbar function
const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div>
        

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  
                  to="/"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/login"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Login
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  
                  to="/todo"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  2D0's
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                  
                  to="/signup"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Signup
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        
     
    </>
  );
};

export default Navbar;
