import { useState, useEffect } from "react";
import Product from "./Product";
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
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-center mx-auto">
        {products &&
          products.map((product) => (
            <div className="col-md-3 m-0">
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductsList;
