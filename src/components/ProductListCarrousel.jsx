import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";
import InfiniteCarrouselAnimation from "./InfiniteCarrouselAnimation";

export default ({ categoryID, interval, infinite, count }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });

        let productsList = response.data;

        if (categoryID) {
          productsList = productsList.filter((product) => product.categoryId === categoryID);
        }
        if (count) {
          let updatedProductList = [];

          for (let i = 0; i < productsList.length; i += count) {
            const ProductsCount = productsList.slice(i, i + count);
            updatedProductList.push(ProductsCount);
          }
          productsList = updatedProductList;
        }

        setProducts(productsList);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [categoryID]);

  return !infinite ? (
    <Carousel controls={false} indicators={false}>
      {products ? (
        count ? (
          products.map((productsArray, index) => (
            <Carousel.Item interval={interval || 2000} key={index}>
              <div className="d-flex h-100 align-items-center justify-content-center">
                {productsArray.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            </Carousel.Item>
          ))
        ) : (
          products.map((product, index) => (
            <Carousel.Item interval={interval || 5000} key={index}>
              <Product product={product} key={product.id} />
            </Carousel.Item>
          ))
        )
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
