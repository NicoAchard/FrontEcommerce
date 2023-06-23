import React from "react";
import "./FeaturedAnimation.css";

const FeaturedAnimation = () => {
  const featuredText = "FEATURED ".repeat(500);

  return (
    <div className="featured-container">
      <div className="featured-line">
        {featuredText.split(" ").map((char, index) => (
          <div className="featured-text" key={index}>
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimation;
