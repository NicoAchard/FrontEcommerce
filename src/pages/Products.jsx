import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "7rem", minHeight: "100vh" }}>
        <ProductsList />
        <Footer />
      </div>
    </>
  );
}

export default Products;
