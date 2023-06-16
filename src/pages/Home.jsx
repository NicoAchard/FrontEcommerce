import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import CallToAction1 from "../components/CallToAction1";
import CallToAction2 from "../components/CallToAction2";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Link to="/products" className="text-decoration-none">
        <ProductsList slice={true} />
      </Link>
      <CallToAction1 />
      <Categories />
      <CallToAction2 />
      <Footer />
    </div>
  );
}

export default Home;
