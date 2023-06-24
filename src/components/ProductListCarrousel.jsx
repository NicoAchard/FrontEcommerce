import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";

export default ({ slice, categoryID, filterPrice, max200, range201to300, min301 }) => {
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
        if (slice) {
          setProducts(products.slice(0, slice));
        }

        if (filterPrice) {
          setProducts(
            products.filter((product) => {
              if (max200 && product.price <= 200) {
                return true;
              } else if (range201to300 && product.price >= 201 && product.price <= 300) {
                return true;
              } else if (min301 && product.price > 300) {
                return true;
              }
              return false;
            }),
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [categoryID, filterPrice, max200, range201to300, min301, products]);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-5">
      {products ? (
        products.map((product) => <Product product={product} key={product.id} />)
      ) : (
        <div>
          <SkeletonProduct count={4} />
        </div>
      )}
    </div>
  );
};
