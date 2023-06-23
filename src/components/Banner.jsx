import React from "react";
import "./Banner.css";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate("/products?category=1", { smooth: true });
  };

  return (
    <div className="banner-img-container cursor-pointer">
      <img
        style={{
          width: "100%",
        }}
        src="src\img\banner.jpg"
        alt="Skate image"
        onClick={handleBannerClick}
      />
      <div className="text-white">
        <Link to="/products?category=1" role="button">
          <button className="btn btn-dark text-white px-3">Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
