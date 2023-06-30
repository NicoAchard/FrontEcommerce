import React, { useEffect, useState, useRef } from "react";
import header from "../img/header.jpg";
import logo from "../img/logoHeyBoards.svg";
import "./Header.css";

function Header() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleLogoLoad = () => {
      setLogoLoaded(true);
    };

    const logoImage = new Image();
    logoImage.src = logo;
    logoImage.onload = handleLogoLoad;

    headerRef.current.classList.add("animate-header");

    return () => {
      logoImage.onload = null;
    };
  }, []);

  return (
    <div className="header-container container-fluid p-0">
      <div
        className={`header-image-container h-100 mt-0 mt-sm-5 ${logoLoaded ? "logo-loaded" : ""}`}
      >
        <img
          ref={headerRef}
          className="header-image2 position-absolute"
          src={header}
          alt="Skate image"
        />
        <div className="fade-overlay position-absolute" />
        <div className="d-flex h-100 justify-content-center align-items-center">
          <img
            className={`position-absolute logo ${logoLoaded ? "logo-show" : ""}`}
            src={logo}
            alt="Logo image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
