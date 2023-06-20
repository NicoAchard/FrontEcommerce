import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
function ThanksForOrder() {
  return (
    <>
      <div className="container ">
        <div className="row mt-3">
          <p style={{ fontSize: "0.9rem", color: "blue" }}>Payment successful</p>
          <h2>Thanks for ordering</h2>
          <p style={{ color: "gray" }}>
            We appreciate your order, we’re currently processing it. So hang tight and we’ll send
            you confirmation very soon!
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
        <div className="row border rounded mb-5 py-3">
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
          <section>
            <MDBContainer className="py-1 h-25">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard className="card-stepper" style={{ borderRadius: "10px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <span className="lead fw-normal">Your order has been delivered</span>
                          <span className="text-muted small">by DHFL on 21 Jan, 2023</span>
                        </div>
                        <div>
                          <MDBBtn outline>Track order details</MDBBtn>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" style={{ color: "purple" }} />
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="d-flex justify-content-center align-items-center big-dot dot">
                          <MDBIcon icon="check text-white" />
                        </span>
                      </div>

                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-column justify-content-center">
                          <span>15 Mar</span>
                          <span>Order placed</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <span>15 Mar</span>
                          <span>Order Dispatched</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <span>15 Mar</span>
                          <span>Out for delivery</span>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span>15 Mar</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
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
              <i class="bi bi-credit-card-2-front"></i> Ending with 2424
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
    </>
  );
}
export default ThanksForOrder;
