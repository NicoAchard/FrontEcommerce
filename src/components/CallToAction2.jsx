import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";

function CallToAction2() {
  return (
    <div className="image-container my-5">
      <img
        style={{ width: "1000px", height: "500px" }}
        className="rounded"
        src="/src/img/CallToAction2.jpg"
        alt="Skate image"
      />
      <div className="text-white">
        <h2>Enjoy the ride with Hey bro! </h2>
        <p>Let it flow, surf the streets and feel the good vibes come along</p>
        <Link to="/products" role="button">
          <button className="btn btn-light">View products</button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction2;