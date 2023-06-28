import React from "react";
import "./Banner.css";
import banner from "../img/banner.jpg";
import banner2 from "../img/banner2.jpg";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate("/products?category=1");
  };

  return (
    <div>
      <div className="banner-img-container md-banner cursor-pointer">
        <Link to="/products?category=1" role="button">
          <img
            style={{
              width: "100%",
            }}
            src={banner}
            alt="Skate image"
            className="pe-none"
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
            src={banner2}
            alt="Skate image"
            onClick={handleBannerClick}
          />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
