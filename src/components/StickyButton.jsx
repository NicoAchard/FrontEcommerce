import React from "react";

import { Link } from "react-router-dom";

const StickyButton = () => {
  return (
    <div>
      <Link to="/about-this-project">
        <button
          className="btn btn-dark border border-white p-2"
          style={{ position: "fixed", bottom: "2%", right: "2%", zIndex: 1, height: "2.5rem" }}
        >
          About this project
        </button>
      </Link>
    </div>
  );
};

export default StickyButton;
