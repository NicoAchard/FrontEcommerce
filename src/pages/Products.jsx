import ProductsList from "../components/ProductsList";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <ProductsList />
      </div>
      <Footer />
    </>
  );
}

export default Products;
