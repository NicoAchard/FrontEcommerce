import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterProductsSidebar";
import FilterTopBar from "../components/FilterTopBar";
import "./Product.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const [categoryID, setCategoryID] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  useEffect(() => {
    if (!isNaN(category)) {
      setCategoryID(Number(category));
    }
  }, [category]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3 ">
                <FilterSidebar setCategoryID={setCategoryID} />
              </div>
              <div className="col">
                <FilterTopBar />
                <ProductsList categoryID={categoryID} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
