import { useState, useEffect } from "react";
import axios from "axios";

import Product from "./ProductItem";
import SkeletonProduct from "./SkeletonProduct";

import img_not_found from "../img/filter_not_found.jpg";
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
            return returnProduct !== null;
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
    <div className="d-flex flex-wrap w-100 mt-3 h-100 border-top pt-3 justify-content-center justify-content-md-between">
      {products ? (
        products.length > 0 ? (
          products.map((product) => <Product product={product} key={product.id} />)
        ) : (
          <div className="d-flex border flex-column flex-sm-row justify-content-center align-items-center w-100 h-100 gap-4 p-1 p-md-2  p-lg-4 ">
            <img src={img_not_found} className="pe-none img_filter" alt="Products not found" />
            <div className="d-flex flex-column gap-2">
              <span className=" fw-medium title-responsive">
                Sorry, no products were found with the selected filters.
              </span>
              <ul>
                <li className="text-responsive">
                  Try again with <b>different filter options</b>
                </li>
                <li className="text-responsive">
                  Please <b>check the spelling</b> of the word
                </li>
                <li className="text-responsive">
                  Try using <b>more generic terms</b> or fewer words
                </li>
              </ul>
            </div>
          </div>
        )
      ) : (
        <div>
          <SkeletonProduct count={4} />
        </div>
      )}
    </div>
  );
}

export default ProductsList;
