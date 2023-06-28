import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductListCarrousel from "../components/ProductListCarrousel";
import Surfboards from "../components/Surfboards";
import CallToAction2 from "../components/CallToAction2";
import Banner from "../components/Banner";
import InfiniteCarrouselAnimation from "../components/InfiniteCarrouselAnimation";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <Header />
        <div className="container home-container d-flex flex-column gap-5">
          <InfiniteCarrouselAnimation />
          <ProductListCarrousel interval={1000} infinite={true} />
          <Banner />
          <Surfboards />
          <Categories />
          <CallToAction2 />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
