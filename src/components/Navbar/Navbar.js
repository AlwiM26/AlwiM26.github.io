import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';

function Navbar(props) {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className="header">
      <div className="topnav">
        <a href="/" ><img src={logo} className="navlogo" alt="Logo" /></a>
        <ul className={clicked ? "menunav" : "menunav active"}>
          <li className="itemnav">
            <a href="#about" className="linknav">aboutMe()</a>
          </li>
          <li className="itemnav">
            <a href="#project" className="linknav">projects()</a>
          </li>
          <li className="itemnav">
            <a href="#contact" className="linknav">contact()</a>
          </li>
        </ul>
        <div className="mobilemenu" onClick={() => handleClick()}>
          <i className={clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

