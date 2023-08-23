import React from "react";
import "./footer.css";
import Logo from "../../svg-components/logo/logo";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Logo />
        <p>Copyright © 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
