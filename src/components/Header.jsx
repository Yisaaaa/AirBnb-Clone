import React from "react";
import logo from "../airbnb.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo of airbnb" />
    </header>
  );
}

export default Header;
