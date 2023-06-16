import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Product.css"; // Import your custom CSS file

function Product({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Carousel activeIndex={activeIndex} onSelect={handleSlide} interval={null}>
        {product.photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img
              className="d-block w-100"
              src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
              alt={product.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body style={{ height: "250px" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description.slice(0, 150)} . . .</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
