import React from "react";
import "./header.css";
import Logo from "../../svg-components/logo/logo";
import { NavLink } from "react-router-dom";
import Envelope from "../../svg-components/envelope/envelope";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-navlink">
          <NavLink>Features</NavLink>
          <NavLink>FAQs</NavLink>
        </div>
      </div>
      <div className="header-support">
        <button>Support</button>
        <div className="header-line"></div>
        <div className="header-envelope">
          <Envelope />
        </div>
      </div>
    </div>
  );
};

export default Header;
