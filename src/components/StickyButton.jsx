import React, { useState } from "react";

const StickyButton = ({ setShowOffCanvas, showOffCanvas }) => {
  const handleClick = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  return (
    <div>
      <button
        className="btn btn-dark border border-white p-2"
        style={{
          position: "fixed",
          bottom: "2%",
          right: "2%",
          zIndex: 1,
          height: "2.5rem",
        }}
        onClick={handleClick}
      >
        About this project
      </button>
      {showOffCanvas && <div style={{ marginTop: "3rem" }}></div>}
    </div>
  );
};

export default StickyButton;
