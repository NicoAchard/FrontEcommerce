import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div style={{ marginTop: "7rem" }}>
          <ProductsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
