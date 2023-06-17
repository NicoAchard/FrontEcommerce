import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

export default () => {
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
    <>
      <NavBar />
      <div style={{ marginTop: "4.5rem" }}>
        <div className="d-flex flex-wrap justify-content-center">
          {products &&
            products.map((product) => (
              <div className="m-0" key={product.id}>
                <Product product={product} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
