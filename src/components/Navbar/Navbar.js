import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="header">
      <div className="topnav">
        <Link to="/">
          <img src={logo} className="navlogo" alt="Logo" />
        </Link>
        <ul className={clicked ? "menunav active" : "menunav"}>
          <li className="itemnav">
            <Link
              to="/#about"
              className="linknav"
              onClick={() => handleClick()}
            >
              aboutMe()
            </Link>
          </li>
          <li className="itemnav">
            <Link
              to="/#project"
              className="linknav"
              onClick={() => handleClick()}
            >
              projects()
            </Link>
          </li>
          <li className="itemnav">
            <Link
              to="/#contact"
              className="linknav"
              onClick={() => handleClick()}
            >
              contact()
            </Link>
          </li>
        </ul>
        <div className="mobilemenu" onClick={() => handleClick()}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
