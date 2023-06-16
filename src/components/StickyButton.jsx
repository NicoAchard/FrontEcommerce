import React from "react";

import { Link } from "react-router-dom";

const StickyButton = () => {
  return (
    <div>
      <Link to="/about-this-project">
        <button
          className="btn btn-light border border-black"
          style={{ position: "fixed", bottom: "12px", right: "10px", zIndex: 9999 }}
        >
          About this project
        </button>
      </Link>
    </div>
  );
};

export default StickyButton;
