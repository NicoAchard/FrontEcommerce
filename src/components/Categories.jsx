import React, { useState } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const initialHideConfig = { text1: "d-none", text2: "d-none", text3: "d-none", text4: "d-none" };
  const [textHide, setTextHide] = useState(initialHideConfig);
  function handleTextHide(target) {
    setTextHide(initialHideConfig);
    setTextHide({ ...textHide, [target]: "d-flex" });
  }

  return (
    <div className="d-flex justify-content-center categories rounded">
      <div className="d-flex" style={{ width: "100%", height: "650px" }}>
        <div className="category">
          <div className="text-center text-white fw-bold bg-dark py-2 m-0 pt-3">
            <h4>SKATEBOARDS</h4>
          </div>
          <img
            src="src\img\category-skate.jpg"
            alt="Skates"
            className="category-img"
            onClick={() => navigate("/products?category=1")}
            onMouseEnter={() => handleTextHide("text1")}
          />
        </div>
        <div className="category">
          <div className="text-center text-white fw-bold bg-dark py-2 m-0 pt-3">
            <h4>LONGBOARDS</h4>
          </div>
          <img
            src="src\img\category-longboard.jpg"
            alt="Longboards"
            className="category-img"
            onClick={() => navigate("/products?category=3")}
            onMouseEnter={() => handleTextHide("text2")}
          />
        </div>
        <div className="category">
          <div className="text-center text-white fw-bold bg-dark py-2 m-0 pt-3">
            <h4>CRUISERS</h4>
          </div>
          <img
            src="src\img\category-cruiser.jpg"
            alt="Cruisers"
            className="category-img"
            onClick={() => navigate("/products?category=2")}
            onMouseEnter={() => handleTextHide("text3")}
          />
        </div>
        <div className="category">
          <div className="text-center text-white fw-bold bg-dark py-2 m-0 pt-3">
            <h4>SURFBOARDS</h4>
          </div>
          <img
            src="src\img\category-surf.jpg"
            alt="Surfboards"
            className="category-img"
            onClick={() => navigate("/products?category=4")}
            onMouseEnter={() => handleTextHide("text4")}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
