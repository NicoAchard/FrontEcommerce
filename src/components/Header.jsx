import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleLogoLoad = () => {
      setLogoLoaded(true);
    };

    const logoImage = new Image();
    logoImage.src = "src/img/logoHeyBoards2.svg";
    logoImage.onload = handleLogoLoad;

    return () => {
      logoImage.onload = null;
    };
  }, []);

  return (
    <div className="header-container container-fluid p-0">
      <div className={`header-image-container h-100  ${logoLoaded ? "logo-loaded" : ""}`}>
        <img
          className="header-image2 position-absolute"
          src="src/img/header.jpg"
          alt="Skate image"
        />
        <div className="fade-overlay position-absolute" />
        <div className="d-flex h-100 justify-content-center align-items-center">
          <img
            className={`position-absolute logo ${logoLoaded ? "logo-show" : ""}`}
            src="src/img/logoHeyBoards.svg"
            alt="Logo image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
