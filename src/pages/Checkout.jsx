import { useSelector, useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import NavBar from "../components/./Navbar";
import Footer from "../components/Footer";

import { REMOVE_PRODUCT } from "../redux/cartSlice";
import Card from "../components/CreditCard";
import MercadoPago from "../components/MercadoPago";
import PayPal from "../components/Paypal";

function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user);

  const shippingPrice = 5;
  const taxPrice = 15;

  const shippingAndTaxPrice = shippingPrice + taxPrice;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [finishProcess, setFinishProcess] = useState(false);
  const [badShippingInformation, setBadShippingInformation] = useState(false);
  const [showShippingInformation, setShowShippingInformation] = useState(true);

  //Inputs
  const [firstname, setFirstname] = useState(user.data.firstname);
  const [lastname, setLastname] = useState(user.data.lastname);
  const [phoneNumber, setPhoneNumber] = useState(user.data.phone_number);
  const [address, setAddress] = useState(user.data.address);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("UYU");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      navigate("/products");
    }
  }, [products, navigate]);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          products,
        },
      });
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setIsLoading(false);
      navigate("/thanks");
    }, 1000);
  };

  const handleSubmitShippingInformation = (event) => {
    event.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !phoneNumber ||
      !address ||
      !city ||
      !country ||
      !state ||
      !postalCode
    ) {
      return setBadShippingInformation(true);
    }
    setBadShippingInformation(false);
    return setShowShippingInformation(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <div>
        <NavBar />
        <div className="row pt-5 mt-5" style={{ fontSize: "1.1rem" }}>
          <div className="col p-5">
            {showShippingInformation ? (
              <div>
                <form
                  onSubmit={(event) => handleSubmitShippingInformation(event)}
                  className="d-flex flex-column"
                >
                  <h4 className="billing-address mb-3 fs-5">Shipping information</h4>
                  <label htmlFor="firstName">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                    style={{ fontSize: "1.1rem" }}
                  />
                  {badShippingInformation && !firstname && (
                    <span className="text-danger"> Valid firstname is required. </span>
                  )}

                  <label htmlFor="lastName">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                    style={{ fontSize: "1.1rem" }}
                  />
                  {badShippingInformation && !lastname && (
                    <span className="text-danger"> Valid lastname is required. </span>
                  )}

                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      style={{ fontSize: "1.1rem" }}
                    />
                    {badShippingInformation && !address && (
                      <span className="text-danger"> Please enter your shipping address. </span>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        style={{ fontSize: "1.1rem" }}
                      />
                      {badShippingInformation && !city && (
                        <span className="text-danger"> Please provide a valid city. </span>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="country">Country</label>
                      <select
                        className="custom-select d-block w-100 form-control"
                        id="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        style={{ fontSize: "1.1rem" }}
                      >
                        <option value="UYU">Uruguay</option>
                        <option value="USA">United States</option>
                        <option value="CAN">Canada</option>
                        <option value="MEX">Mexico</option>
                      </select>
                      {badShippingInformation && !country && (
                        <span className="text-danger"> Please select a valid country. </span>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state">State / Province</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                        style={{ fontSize: "1.1rem" }}
                      />
                      {badShippingInformation && !state && (
                        <span className="text-danger"> Please provide a valid state. </span>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="zip">Postal code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}
                        style={{ fontSize: "1.1rem" }}
                      />
                      {badShippingInformation && !postalCode && (
                        <span className="text-danger">Zip code required.</span>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone-number">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone-number"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      style={{ fontSize: "1.1rem" }}
                    />
                    {badShippingInformation && !phoneNumber && (
                      <span className="text-danger">Phone number required.</span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Confirm
                  </button>
                </form>
              </div>
            ) : (
              <Tabs defaultActiveKey="Credit_card" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="Credit_card" title="Credit card">
                  <Card FinishProcess={setFinishProcess} />
                </Tab>
                <Tab eventKey="mercado_pago" title="Mercado Pago">
                  <MercadoPago FinishProcess={setFinishProcess} />
                </Tab>

                <Tab eventKey="Paypal" title="PayPal">
                  <PayPal FinishProcess={setFinishProcess} />
                </Tab>
              </Tabs>
            )}
          </div>
          <div className="col-12 col-md-6 p-5">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted fs-5">Order summary</span>
              <span className="badge text-black badge-pill">{products.length}</span>
            </h4>
            {products.map((product) => (
              <div
                className="border d-flex p-3 rounded"
                style={{ height: "8rem" }}
                key={product.id}
              >
                <img
                  src={`${import.meta.env.VITE_API_IMG}/${product.img[0].url}`}
                  alt="product-img"
                  className="img-fluid"
                />
                <div className="order-product d-flex flex-column justify-content-between w-100 ps-3 pt-2">
                  <div className="d-flex justify-content-between">
                    <p>{product.name}</p>
                    <span className="text-danger">
                      <BsTrashFill
                        className="cursor-pointer"
                        onClick={() => dispatch(REMOVE_PRODUCT(product.id))}
                      />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>USD {product.unitPrice}</p>
                    <p>
                      Quantity <span className="fw-bold">{product.qty} </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <ul className="list-group mb-3 ">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6>Subtotal</h6>
                </div>
                <span className="text-muted">
                  US${" "}
                  {products.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.unitPrice * currentValue.qty,
                    0,
                  )}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6>Shipping</h6>
                </div>
                <span className="text-muted">US$ {shippingPrice}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Taxes</h6>
                </div>
                <span className="text-muted">US$ {taxPrice}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>
                  US${" "}
                  {shippingAndTaxPrice +
                    products.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.unitPrice * currentValue.qty,
                      0,
                    )}
                </strong>
              </li>
            </ul>

            <button
              className="btn btn-dark btn-lg btn-block w-100"
              onClick={handleCheckout}
              disabled={!finishProcess}
            >
              {isLoading ? "Processing your order..." : "Confirm Order"}
            </button>
            {!finishProcess && (
              <span className="text-danger" style={{ fontSize: "0.9rem" }}>
                Please complete all the fields to confirm order
              </span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
