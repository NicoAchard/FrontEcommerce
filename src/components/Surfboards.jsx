import "./Surfboards.css";
import ProductsList from "./ProductsList";

function Surfboards() {
  return (
    <div className="container surfboards-container" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-6 m-0 p-0">
          <img
            src="src\img\master-the-waves.jpg"
            alt="master-the-waves"
            style={{
              height: "550px",
            }}
          />
        </div>
        <div
          className="col=md-6 pe-0"
          style={{
            height: "550px",
          }}
        >
          <ProductsList categoryID={4} slice={2} />
        </div>
      </div>
    </div>
  );
}

export default Surfboards;
