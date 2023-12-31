import React from "react";
import "./CallToAction2.css";
import skater from "../img/CallToAction2.webp";
import { useNavigate } from "react-router-dom";

function CallToAction2() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate("/products");
  };
  return (
    <div className="image-container mb-5 cursor-pointer">
      <img
        style={{ width: "100%", height: "550px" }}
        src={skater}
        alt="Skate image"
        onClick={handleBannerClick}
      />
      <div className="text-white w-100 call-text">
        <h2 className="call-text fw-bold">ENJOY THE RIDE WITH HEY! BOARDS</h2>
        <p className="call-text">
          Let it flow, surf the streets and feel the good vibes come along
        </p>
      </div>
    </div>
  );
}

export default CallToAction2;
