import React from "react";

import { Link } from "react-router-dom";

const StickyButton = () => {
  return (
    <div>
      <Link to="/about-this-project">
        <button
          className="btn btn-dark border border-white"
          style={{ position: "fixed", bottom: "12px", right: "10px", zIndex: 1 }}
        >
          About this project
        </button>
      </Link>
    </div>
  );
};

export default StickyButton;
