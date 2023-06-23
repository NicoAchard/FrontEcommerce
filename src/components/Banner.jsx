import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-img-container">
      <img
        style={{
          width: "100%",
        }}
        src="/src/img/banner.jpg"
        alt="Skate image"
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
