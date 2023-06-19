import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import "./Product.css";

function Product({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setActiveIndex(1);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  const handlerNavigateToProduct = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  return (
    <Card
      style={{ width: "18rem", border: "none", cursor: "pointer" }}
      onClick={() => handlerNavigateToProduct(product.slug)}
    >
      {product.photos.length > 1 ? (
        <Carousel
          activeIndex={activeIndex}
          onSelect={() => {}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          controls={false}
          slide={false}
          indicators={false}
        >
          {product.photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
                alt={product.name}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <img
          className="d-block w-100"
          src={`${import.meta.env.VITE_API_IMG}/${product.photos[0].url}`}
          alt={product.name}
        />
      )}

      <Card.Body
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "250px" }}
      >
        <div className="title-container">
          <Card.Title className="text-center product-title">{product.name}</Card.Title>
        </div>
        <Card.Text className="text-danger font-weight-bold">{product.price} USD</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
