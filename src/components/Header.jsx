import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container container-fluid p-0">
      <div className="header-image-container ">
        <img
          className=" header-image position-absolute"
          src="src\img\header.jpg"
          alt="Skate image"
        />

        <img className="position-absolute logo" src="src\img\logoHeyBoards2.svg" alt="Logo image" />

        <div className="fade-overlay position-absolute" />
      </div>
    </div>
  );
}

export default Header;
