import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";
import InfiniteCarrouselAnimation from "./InfiniteCarrouselAnimation";

export default ({ categoryID, interval, infinite }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        if (categoryID) {
          setProducts(response.data.filter((product) => product.categoryId === categoryID));
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [categoryID]);
  return !infinite ? (
    <Carousel controls={false} indicators={false}>
      {products ? (
        products.map((product, index) => (
          <Carousel.Item interval={interval || 5000} key={index}>
            <Product product={product} key={product.id} carrousel={true} />
          </Carousel.Item>
        ))
      ) : (
        <div>
          <SkeletonProduct count={4} />
        </div>
      )}
    </Carousel>
  ) : (
    products && <InfiniteCarrouselAnimation products={products} />
  );
};
