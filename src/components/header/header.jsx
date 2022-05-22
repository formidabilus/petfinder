import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav__brand">
          <img className="logo" src="../../assets/img/favicon.svg" alt="logo" />
          <span className="nav__brand--text">Paws Animal Shelter</span>
        </a>
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              SEARCH
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              ABOUT US
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              DONATE
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              FOSTER
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link--adopt">
              ADOPT
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              OTHER
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
