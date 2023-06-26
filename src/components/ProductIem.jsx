import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import "./Product.css";

function Product({ product, carrousel }) {
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

  if (!carrousel) {
    return (
      <Card
        onClick={() => handlerNavigateToProduct(product.slug)}
        className="d-flex gap-4 my-3 product-card"
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
          className="d-flex flex-column p-0 justify-content-center align-items-center  h-50"
          style={{ height: "150px" }}
        >
          <div className="title-container">
            <Card.Title className="text-center product-title fw-normal  ">
              {product.name.length > 25 ? `${product.name.slice(0, 25)}...` : product.name}
            </Card.Title>
          </div>
          <Card.Text className="product-price text-center">{product.price} USD</Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <>
        {product.photos.length > 1 ? (
          <div className=" w-100 ">
            {product.photos.map(
              (photo, index) =>
                index < 2 && (
                  <img
                    className=" h-100 cursor-pointer"
                    src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
                    alt={product.name}
                    key={index}
                    onClick={() => handlerNavigateToProduct(product.slug)}
                  />
                ),
            )}
          </div>
        ) : (
          <img
            className="img-fluid"
            src={`${import.meta.env.VITE_API_IMG}/${product.photos[0].url}`}
            alt={product.name}
          />
        )}
      </>
    );
  }
}

export default Product;
