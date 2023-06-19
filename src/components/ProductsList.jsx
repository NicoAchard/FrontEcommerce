import { useState, useEffect } from "react";
import Product from "./ProductIem";
import axios from "axios";

function ProductsList({ slice }) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        if (slice) {
          setProducts(response.data.slice(0, 3));
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-5">
      {products && products.map((product) => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default ProductsList;
