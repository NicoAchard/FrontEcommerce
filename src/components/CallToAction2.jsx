import React from "react";
import "./CallToAction.css";
import { Link, useNavigate } from "react-router-dom";

function CallToAction2() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate("/products");
  };
  return (
    <div className="image-container my-5 cursor-pointer">
      <img
        style={{ width: "100%", height: "550px" }}
        className="rounded"
        src="/src/img/CallToAction2.jpg"
        alt="Skate image"
        onClick={handleBannerClick}
      />
      <div className="text-white">
        <h2>Enjoy the ride with Hey bro! </h2>
        <p>Let it flow, surf the streets and feel the good vibes come along</p>
        <Link to="/products" role="button">
          <button className="btn btn-dark text-white">View products</button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction2;
