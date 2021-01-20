import React from "react";
import logo from "./Images/logo.png"

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="90" height="90"></img>
        <h1>Lucky Notes</h1>
      </div>
    </>
  );
};

export default Header;
