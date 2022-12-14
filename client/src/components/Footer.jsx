import React from "react";
import Logo from "../images/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>Dhruv Sutail</b>.
      </span>
    </footer>
  );
};

export default Footer;
