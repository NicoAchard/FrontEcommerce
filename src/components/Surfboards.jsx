import "./Surfboards.css";
import ProductListCarrousel from "./ProductListCarrousel";

function Surfboards() {
  return (
    <div className="container surfboards-container">
      <div className="row">
        <div className="col-5 m-0 p-0">
          <img
            src="src\img\master-the-waves.jpg"
            alt="master-the-waves"
            className="img-fluid h-100"
          />
        </div>
        <div className="col-7 pe-0">
          <ProductListCarrousel categoryID={4} slice={2} size="sm" interval={3000} />
        </div>
      </div>
    </div>
  );
}

export default Surfboards;
