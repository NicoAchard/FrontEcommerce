import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";

function CallToAction1() {
  return (
    <div className="image-container my-5">
      <img
        style={{
          width: "100%",
          height: "550px",
        }}
        src="/src/img/CallToAction1.jpg"
        alt="Skate image"
      />
      <div className="text-white">
        <h2>Skate our products...</h2>
        <p>A board customized to your needs, light and resistant for every-day use</p>
        <Link to="/products" role="button">
          <button className="btn btn-dark text-white">View products</button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction1;
