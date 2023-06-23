import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterProductsSidebar";
import FilterTopBar from "../components/FilterTopBar";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const [categoryID, setCategoryID] = useState(null);
  const [filterPrice, setFilterPrice] = useState(false);
  const [max200, setMax200] = useState(false);
  const [range201to300, setRange201to300] = useState(false);
  const [min301, setMin301] = useState(false);
  const [products, setProducts] = useState([]);
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
        <div style={{ marginTop: "7rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <FilterSidebar
                  setCategoryID={setCategoryID}
                  setFilterPrice={setFilterPrice}
                  setMax200={setMax200}
                  setRange201to300={setRange201to300}
                  setMin301={setMin301}
                />
              </div>
              <div className="col">
                <FilterTopBar />
                <ProductsList
                  categoryID={categoryID}
                  filterPrice={filterPrice}
                  max200={max200}
                  range201to300={range201to300}
                  min301={min301}
                  setProducts={setProducts}
                />
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
