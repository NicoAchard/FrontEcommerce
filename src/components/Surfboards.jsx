import "./Surfboards.css";
import ProductListCarrousel from "./ProductListCarrousel";

function Surfboards() {
  return (
    <div className="container surfboards-container">
      <div className="row">
        <div className="col-12 col-md-5 m-0 p-0">
          <img
            src="src\img\master-the-waves2.jpg"
            alt="master-the-waves"
            className="img-fluid h-100 img-size-lg d-none d-md-block"
          />
          <img
            src="src\img\master-the-waves.jpg"
            alt="master-the-waves"
            className="img-fluid h-100 img-size-sm d-md-none"
          />
        </div>

        <div className="col-md-7 pe-0 pt-4">
          <ProductListCarrousel categoryID={4} interval={3000} count={2} />
        </div>
      </div>
    </div>
  );
}

export default Surfboards;
