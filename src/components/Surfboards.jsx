import "./Surfboards.css";
import ProductsList from "./ProductsList";

function Surfboards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h3>MASTER THE WAVES WITH THESE NEWCOMERS</h3>
        </div>
        <div className="col-7">
          <ProductsList categoryID={4} slice={2} />
        </div>
      </div>
    </div>
  );
}

export default Surfboards;
