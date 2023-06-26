import React from "react";
import "./Banner.css";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate("/products?category=1");
  };

  return (
    <div>
      <div className="banner-img-container md-banner">
        <Link to="/products?category=1" role="button">
          <img
            style={{
              width: "100%",
            }}
            src="src/img/banner.jpg"
            alt="Skate image"
            onClick={handleBannerClick}
          />
        </Link>
      </div>
      <div className="banner-img-container sm-banner">
        <Link to="/products?category=1" role="button">
          <img
            style={{
              width: "100%",
            }}
            src="src/img/banner2.jpg"
            alt="Skate image"
            onClick={handleBannerClick}
          />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
