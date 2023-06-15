import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div>
      <Navbar />
      <Categories />
      <ProductsList slice={true} />
      <Footer />
    </div>
  );
}

export default Home;
