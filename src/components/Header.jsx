import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container container-fluid p-0">
      <div className="header-image-container">
        <img
          className="rounded header-image position-absolute"
          src="src\img\header3.jpg"
          alt="Skate image"
        />

        <img className="position-absolute logo" src="src\img\heybro.png" alt="Logo image" />

        <div className="fade-overlay position-absolute" />
      </div>
    </div>
  );
}

export default Header;
