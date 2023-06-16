import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container container-fluid p-0">
      <div className="header-image-container">
        <img className="rounded header-image" src="src\img\header3.jpg" alt="Skate image" />
        <div className="fade-overlay" />
      </div>
    </div>
  );
}

export default Header;
