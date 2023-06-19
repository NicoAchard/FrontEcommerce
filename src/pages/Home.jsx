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
      <div style={{ marginTop: "4.5rem" }}>
        <Header />
        <div className="container">
          <ProductsList slice={true} />
          <CallToAction1 />
          <Categories />
          <CallToAction2 />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
