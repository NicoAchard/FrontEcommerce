import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Product.css";

function Product({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = () => {
    setActiveIndex(1);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  return (
    <Card style={{ width: "18rem", border: "none" }}>
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
          {product.photos.map((photo) => (
            <Carousel.Item key={photo.url}>
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

      <Card.Body style={{ height: "250px" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description.slice(0, 150)} . . .</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
