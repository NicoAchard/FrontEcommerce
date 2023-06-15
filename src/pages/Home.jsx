import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import CallToAction1 from "../components/CallToAction1";
import CallToAction2 from "../components/CallToAction2";

function Home() {
  return (
    <div>
      <Navbar />
      <CallToAction1 />
      <Categories />
      <ProductsList slice={true} />
      <CallToAction2 />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Home;
