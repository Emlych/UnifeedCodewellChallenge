import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="header">
      <img src="./images/Logo.svg" alt="Unifeed unicorn" />

      <ul className="header__navigation hidden-mobile">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feature">Feature</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="header__navigation--item--highlight">
          <Link to="/login">Subscribe</Link>
        </li>
      </ul>

      <img
        className="hidden-no-mobile"
        src="./images/Hamburger Menu.svg"
        alt="hamburger icon"
      />
    </nav>
  );
}

export default Header;
