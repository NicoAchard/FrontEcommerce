import React from "react";
import "./InfiniteCarrouselAnimation.css";
import Product from "./ProductItem";

const FeaturedAnimation = ({ products }) => {
  const featuredText = "FEATURED ".repeat(500);

  return !products ? (
    <div className="featured-container">
      <div className="featured-line">
        {featuredText.split(" ").map((char, index) => (
          <span className="featured-text" key={index}>
            {char}
          </span>
        ))}
      </div>
    </div>
  ) : (
    <div className="featured-container-img ">
      <div className="featured-line h-100">
        {products &&
          products.map((product) => (
            <Product product={product} key={product.id} carrousel={true} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedAnimation;
