import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../styles/Navbar.css';


const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            eve<span>.</span>ita
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth to="/Homepage/#about-page"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <span>01.</span>  About
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#Experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <span>02.</span>  Experience
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#personal-projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <span>03.</span>  Project
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#contact-form"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <span>04.</span>  Contact
              </HashLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Resume"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
