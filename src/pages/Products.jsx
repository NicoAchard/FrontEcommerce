import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterProductsSidebar";
import FilterTopBar from "../components/FilterTopBar";
import { useState } from "react";

function Products() {
  const [categoryID, setCategoryID] = useState(null);
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div style={{ marginTop: "7rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-3">
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
