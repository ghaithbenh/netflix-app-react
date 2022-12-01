import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nvbr">
      <h1 className="nvl">NETFLIX</h1>
      <div className="hvr">
        <button className="btn1">Sign In</button>
        <button className="btn2">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
