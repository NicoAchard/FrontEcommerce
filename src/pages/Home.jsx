import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import CallToAction1 from "../components/CallToAction1";
import CallToAction2 from "../components/CallToAction2";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CallToAction1 />
      <Categories />
      <CallToAction2 />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Home;
