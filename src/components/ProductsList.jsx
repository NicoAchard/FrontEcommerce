import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";

function ProductsList({ filters, filterByName }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        let filteredList = response.data;
        if (filterByName) {
          filteredList = filteredList.filter(
            (product) => product.name.toLowerCase().indexOf(filterByName.toLowerCase()) !== -1,
          );
        }

        const activeFilters = filters.map((filter) => {
          return { ...filter, options: filter.options.find((option) => option.active === true) };
        });
        if (activeFilters.find((filter) => filter.options !== undefined)) {
          const filteredProducts = filteredList.filter((product) => {
            let returnProduct = product;
            activeFilters.forEach((filter) => {
              if (filter.options !== undefined) {
                if (filter.prop === "range") {
                  returnProduct =
                    product[filter.value] <= filter.options.max &&
                    product[filter.value] >= filter.options.min
                      ? returnProduct
                      : null;
                } else {
                  returnProduct =
                    product[filter.value] === filter.options.value ? returnProduct : null;
                }
              }
            });
            return returnProduct !== null; // Filtrar los productos que no cumplen ninguna condición
          });
          return setProducts(filteredProducts);
        } else {
          return setProducts(filteredList);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [filters, filterByName]);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-3">
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
