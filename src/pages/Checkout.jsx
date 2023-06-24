import NavBar from "../components/./Navbar";
import Footer from "../components/Footer";
import "./Checkout.css";

import { useSelector, useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { REMOVE_PRODUCT, DELETE_CART } from "../redux/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router";

function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleCheckout(event) {
    dispatch(DELETE_CART());
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          products,
        },
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/thanks");
  }
  const shippingPrice = 5;
  const taxPrice = 15;

  const shippingAndTaxPrice = shippingPrice + taxPrice;

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div>
        <div className="checkout container p-5 mt-5">
          <form className="needs-validation" noValidate="" onSubmit={handleCheckout}>
            <div className="row">
              <div className="col-md-6 order-md-1">
                <h4 className="mb-3 fs-5 ">Contact information</h4>
                <div className="mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <hr className="division" />
                  <div className="invalid-feedback">
                    {" "}
                    Please enter a valid email address for shipping updates.{" "}
                  </div>
                </div>

                <div className="row">
                  <h4 className="billing-address mb-3 fs-5">Shipping information</h4>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" />
                    <div className="invalid-feedback"> Valid first name is required. </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" />
                    <div className="invalid-feedback"> Valid last name is required. </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" required="" />
                  <div className="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="state">City</label>
                    <input type="text" className="form-control" id="city" />
                    <div className="invalid-feedback"> Please provide a valid state. </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      className="custom-select d-block w-100 form-control"
                      id="country"
                      required=""
                    >
                      <option value="">Choose...</option>
                      <option>Uruguay</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <div className="invalid-feedback"> Please select a valid country. </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="state">State / Province</label>
                    <input type="text" className="form-control" id="state" />
                    <div className="invalid-feedback"> Please provide a valid state. </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="zip">Postal code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback"> Zip code required. </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone-number">Phone number</label>
                  <input type="text" className="form-control" id="phone-number" />
                </div>

                <hr className="division" />

                <h4 className="mb-3 fs-5">Payment</h4>
                <div className="d-flex flex-direction-row gap-4 my-3">
                  <div className="custom-control custom-radio ">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label ps-1" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label ps-1" htmlFor="debit">
                      MercadoPago
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label ps-1" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback"> Name on card is required </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback"> Credit card number is required </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9 mb-3">
                    <label htmlFor="cc-expiration">Expiration date (MM/YY)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback"> Expiration date required </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback"> Security code required </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted fs-5">Order summary</span>
                  <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                {products.map((product) => (
                  <div className="border img d-flex p-3 rounded" key={product}>
                    <img
                      src={`${import.meta.env.VITE_API_IMG}/${product.img[0].url}`}
                      alt="product-img"
                      className=""
                    />
                    <div className="order-product d-flex flex-column justify-content-between w-100 ps-3 pt-2">
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">{product.name}</p>
                        <BsTrashFill
                          className="cursor"
                          onClick={() => dispatch(REMOVE_PRODUCT(product.id))}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">USD {product.unitPrice}</p>
                        <p>Qty {product.qty}</p>
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
                <button className="btn btn-dark btn-lg btn-block w-100" type="submit">
                  Confirm order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;

{
}
