import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import "./ThanksForOrder.css";
function ThanksForOrder() {
  return (
    <>
      <NavBar />
      <div className="p-5">
        <div className="row">
          <p style={{ fontSize: "0.9rem", color: "blue" }}>Payment successful</p>
          <h2>Thanks for ordering</h2>
          <p style={{ color: "gray" }}>
            We appreciate your order, we’re currently processing it. So hang tight and we’ll send
            you a confirmation very soon!
          </p>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <h6>Order</h6>
            <p style={{ color: "gray" }}>
              Order placed <span className="text-dark">June 20, 2023</span>
            </p>
          </div>
        </div>
        <div className="row border rounded mb-5 pt-3">
          <div className="col-md-3 col-lg-2">
            <img className="img-fluid" src="src/img/heybroInvert.png" alt="Product Image" />
          </div>
          <div className="col-md-5 col-lg-5">
            <h6>Product name</h6>
            <h6>Product price</h6>
            <p style={{ color: "gray" }}>
              Product description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              nobis quam soluta voluptatum optio odio sint error autem possimus suscipit officia a
              ad reprehenderit ullam, accusamus eaque in facilis excepturi.
            </p>
          </div>
          <div className="col-md-2 col-lg-2">
            <h6>Delivery address</h6>
            <p style={{ color: "gray" }}>
              User address here: Lorem ipsum apto.601 sit 8888, Montevideo Uruguay.
            </p>
          </div>
          <div className="col-md-2 col-lg-2">
            <h6>Shipping updates</h6>
            <p style={{ color: "gray" }}>user@gmail.com</p>
            <p style={{ color: "gray" }}>User phone number 099 123 456</p>
            <p className="cursor-pointer text-primary">Edit</p>
          </div>

          <div className=".thanks-card  mb-0">
            <div className="row d-flex justify-content-between px-3 top">
              <div className="d-flex">
                <h5>
                  ORDER <span className="text-primary font-weight-bold">#Y34XDHR</span>
                </h5>
              </div>
              <div className="d-flex flex-column text-sm-right">
                <p className="mb-0">
                  Expected Arrival <span>20/07/23</span>
                </p>
                <p className="cursor-pointer text-primary">
                  Shipment code USPS{" "}
                  <span className="fw-bold text-dark">234094567242423422898</span>
                </p>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <ul id="progressbar" className="text-center">
                  <li className="active step0"></li>
                  <li className="active step0"></li>
                  <li className="active step0"></li>
                  <li className="step0"></li>
                </ul>
              </div>
            </div>
            <div className="row d-flex justify-content-between text-center ">
              <div className="col-3">
                <img className="icon" src="https://i.imgur.com/9nnc9Et.png" />
                <p className="fw-bold">Processed</p>
              </div>

              <div className="col-3">
                <img className="icon" src="https://i.imgur.com/u1AzR7w.png" />
                <p className="fw-bold">Shipped</p>
              </div>

              <div className="col-3">
                <img className="icon" src="https://i.imgur.com/TkPm63y.png" />
                <p className="fw-bold">En Route</p>
              </div>

              <div className="col-3">
                <img className="icon" src="https://i.imgur.com/HdsziHP.png" />
                <p className="fw-bold">Arrived</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row border rounded py-3 mb-5">
          <div className="col-md-4 col-lg-4">
            <h6>Billing address</h6>
            <p style={{ color: "gray" }}>User firstname - lastname</p>
            <p style={{ color: "gray" }}>
              User address here: Lorem ipsum apto.601 sit 8888, Montevideo Uruguay.
            </p>
          </div>
          <div className="col-md-4 col-lg-4">
            <h6>Payment information</h6>
            <p>
              <i className="bi bi-credit-card-2-front"></i> Ending with 2424
            </p>
            <p style={{ color: "gray" }}>Expires 02 / 25</p>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="d-flex justify-content-between">
              <h6 style={{ color: "gray" }}>Subtotal</h6>
              <p>USD 250.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6 style={{ color: "gray" }}>Shipping</h6>
              <p>USD 5.00</p>
            </div>
            <hr />

            <div className="d-flex justify-content-between">
              <h6 style={{ color: "gray" }}>Tax</h6>
              <p>USD 33.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Order total</h6>
              <p className="text-primary">USD 250.00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ThanksForOrder;
