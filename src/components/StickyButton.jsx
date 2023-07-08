import React, { useState } from "react";

const StickyButton = ({ setShowOffCanvas, showOffCanvas }) => {
  const handleClick = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  return (
    <button className="btn btn-dark border border-white px-4 btn-fixed" onClick={handleClick}>
      About this project
    </button>
  );
};

export default StickyButton;
