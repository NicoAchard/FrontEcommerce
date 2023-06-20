import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";

function ProductsList({ slice, categoryID }) {
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
        if (categoryID) {
          setProducts(response.data.filter((product) => product.categoryId === categoryID));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [categoryID]);

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
}

export default ProductsList;
