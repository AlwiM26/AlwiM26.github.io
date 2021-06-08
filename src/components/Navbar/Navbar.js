import React, { useState } from "react";
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
        <a href="/">
          <img src={logo} className="navlogo" alt="Logo" />
        </a>
        <ul className={clicked ? "menunav active" : "menunav"}>
          <li className="itemnav">
            <a href="#about" className="linknav" onClick={() => handleClick()}>
              aboutMe()
            </a>
          </li>
          <li className="itemnav">
            <a
              href="#project"
              className="linknav"
              onClick={() => handleClick()}
            >
              projects()
            </a>
          </li>
          <li className="itemnav">
            <a
              href="#contact"
              className="linknav"
              onClick={() => handleClick()}
            >
              contact()
            </a>
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
