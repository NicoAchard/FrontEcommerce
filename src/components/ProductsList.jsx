import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="d-flex  justify-content-around my-3">
      {products && products.map((product) => <Product product={product} />)}
    </div>
  );
}

export default ProductsList;
