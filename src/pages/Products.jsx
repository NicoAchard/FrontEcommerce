import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterProductsSidebar";
import FilterTopBar from "../components/FilterTopBar";
function Products() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div style={{ marginTop: "7rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <FilterSidebar />
              </div>
              <div className="col">
                <FilterTopBar />
                <ProductsList />
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
