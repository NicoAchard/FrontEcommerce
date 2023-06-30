import React, { useState } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import skate from "../img/category-skate.webp";
import longboard from "../img/category-longboard.webp";
import cruiser from "../img/category-cruiser.webp";
import surfboard from "../img/category-surf.webp";

function Categories() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-none d-md-flex justify-content-center categories">
        <div className="d-flex" style={{ width: "100%", height: "650px" }}>
          <div className="category">
            <div className="text-center fw-bold py-2 m-0 pt-3">
              <h4 className="" style={{ color: "#FF7F50", letterSpacing: "1px" }}>
                SKATEBOARDS
              </h4>
            </div>
            <img
              src={skate}
              alt="Skates"
              className="category-img"
              onClick={() => navigate("/products?category=1")}
            />
          </div>
          <div className="category">
            <div className="text-center fw-bold py-2 m-0 pt-3">
              <h4 className="" style={{ color: "#00BCD4", letterSpacing: "1px" }}>
                LONGBOARDS
              </h4>
            </div>
            <img
              src={longboard}
              alt="Longboards"
              className="category-img"
              onClick={() => navigate("/products?category=3")}
            />
          </div>
          <div className="category">
            <div className="text-center fw-bold py-2 m-0 pt-3">
              <h4 className="" style={{ color: "#8BC34A", letterSpacing: "1px" }}>
                CRUISERS
              </h4>
            </div>
            <img
              src={cruiser}
              alt="Cruisers"
              className="category-img"
              onClick={() => navigate("/products?category=2")}
            />
          </div>
          <div className="category">
            <div className="text-center fw-bold py-2 m-0 pt-3">
              <h4 className="" style={{ color: "#FFC107", letterSpacing: "1px" }}>
                SURFBOARDS
              </h4>
            </div>
            <img
              src={surfboard}
              alt="surfboards"
              className="category-img"
              onClick={() => navigate("/products?category=4")}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center categories2 d-md-none">
        <div className="d-flex gap-1" style={{ width: "100%", height: "450px" }}>
          <div className="category2">
            <div className="text-center fw-bolder m-0 pt-3">
              <h4 className="" style={{ color: "#FF7F50", letterSpacing: "1px" }}>
                SKATEBOARDS
              </h4>
            </div>
            <img
              src={skate}
              alt="Skates"
              className="category-img2"
              onClick={() => navigate("/products?category=1")}
            />
          </div>
          <div className="category2">
            <div className="text-center fw-bold m-0 pt-3">
              <h4 className="" style={{ color: "#00BCD4", letterSpacing: "1px" }}>
                LONGBOARDS
              </h4>
            </div>
            <img
              src={longboard}
              alt="Longboards"
              className="category-img2"
              onClick={() => navigate("/products?category=3")}
            />
          </div>
          <div className="category2">
            <div className="text-center fw-bold m-0 pt-3">
              <h4 className="" style={{ color: "#8BC34A", letterSpacing: "1px" }}>
                CRUISERS
              </h4>
            </div>
            <img
              src={cruiser}
              alt="Cruisers"
              className="category-img2"
              onClick={() => navigate("/products?category=2")}
            />
          </div>
          <div className="category2">
            <div className="text-center fw-bold m-0 pt-3">
              <h4 className="" style={{ color: "#FFC107", letterSpacing: "1px" }}>
                SURFBOARDS
              </h4>
            </div>
            <img
              src={surfboard}
              alt="surfboards"
              className="category-img2"
              onClick={() => navigate("/products?category=4")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
