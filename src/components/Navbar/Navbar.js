import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (val = !clicked) => {
    setClicked(val);
  };

  return (
    <div className="header">
      <div className="topnav">
        <Link to="/">
          <img src={logo} className="navlogo" alt="Logo" onClick={() => handleClick(false)} />
        </Link>
        <ul className={clicked ? "menunav active" : "menunav"}>
          <li className="itemnav">
            <HashLink
              to="/#about"
              className="linknav"
              onClick={() => handleClick()}
            >
              aboutMe()
            </HashLink>
          </li>
          <li className="itemnav">
            <HashLink
              to="/#project"
              className="linknav"
              onClick={() => handleClick()}
            >
              projects()
            </HashLink>
          </li>
          <li className="itemnav">
            <HashLink
              to="/#contact"
              className="linknav"
              onClick={() => handleClick()}
            >
              contact()
            </HashLink>
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
