import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DELETE_CART } from "../redux/cartSlice";
import { format } from "date-fns";
import axios from "axios";

import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

import "./ThanksForOrder.css";
import "react-toastify/dist/ReactToastify.css";

function ThanksForOrder() {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [productsOrder, setProductsOrder] = useState(null);

  const notify = () => toast("This functionality is under development");

  useEffect(() => {
    dispatch(DELETE_CART());
    const userOrder = async (event) => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders/lastUserOrder`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProductsOrder(response.data);
    };
    userOrder();
  }, []);

  const shippingPrice = 5;
  const taxPrice = 15;

  const shippingAndTaxPrice = shippingPrice + taxPrice;

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        progressStyle={{ backgroundColor: "#52C9B0" }}
      />
      <div className="p-5 mt-5">
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
            <h6>Details</h6>
            <p style={{ color: "gray" }}>
              Order placed:{" "}
              <span className="text-dark">
                {productsOrder && format(new Date(productsOrder.createdAt), "dd/MM/yy HH:mm")}
              </span>
            </p>
          </div>
        </div>

        {productsOrder && (
          <div className=".thanks-card mb-5 text-center ">
            <div className="row d-flex justify-content-between ">
              <div className="d-flex">
                <h5 className="text-center">
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
        )}

        {productsOrder &&
          productsOrder.products.map((order) => (
            <div key={order.id}>
              <div className="row border rounded mb-4 p-3 align-items-self">
                <div className="col-md-3 col-lg-2 text-center">
                  <img
                    style={{ width: "150px" }}
                    src={`${import.meta.env.VITE_API_IMG}/${order.img[0].url}`}
                    alt="Product Image"
                  />
                </div>

                <div className="col-md-5 col-lg-5 mt-3 mt-sm-3 mt-xs-3 mt-md-0">
                  <h6>{order.name}</h6>
                  <h6>US$ {order.unitPrice}</h6>
                  <h6>Quantity: {order.qty} </h6>
                  <p style={{ color: "gray" }}>{order.description}</p>
                </div>
                <div className="col-md-4 row">
                  <div className="col-lg-6 ">
                    <h6>Delivery address</h6>
                    <p style={{ color: "gray" }}>{user.data.address}</p>
                  </div>
                  <div className="col-lg-6 ">
                    <h6>Shipping updates</h6>
                    <p style={{ color: "gray" }}>{user.data.email}</p>
                    <p style={{ color: "gray" }}>{user.data.phone_number}</p>
                    <p className="cursor-pointer text-primary" onClick={notify}>
                      Edit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {productsOrder && (
          <div className="row border rounded py-3 mb-5">
            <div className="col-md-4 col-lg-4">
              <h6>Billing address</h6>
              <p className="mt-3" style={{ color: "gray" }}>
                {user.data.firstname} {user.data.lastname}
              </p>
              <p style={{ color: "gray" }}>{user.data.address}</p>
            </div>
            <div className="col-md-4 col-lg-4">
              <h6>Payment information</h6>
              <p className="mt-3 text-secondary">
                <i className="bi bi-credit-card-2-front "></i> Ending with 2424
              </p>
              <p style={{ color: "gray" }}>Expires 02 / 25</p>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="d-flex justify-content-between">
                <h6 style={{ color: "gray" }}>Subtotal</h6>

                <p>
                  US${" "}
                  {productsOrder.products.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.unitPrice * currentValue.qty,
                    0,
                  )}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h6 style={{ color: "gray" }}>Shipping</h6>
                <p> US$ {shippingPrice}</p>
              </div>
              <hr />

              <div className="d-flex justify-content-between">
                <h6 style={{ color: "gray" }}>Taxes</h6>
                <p> US$ {taxPrice}</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h6>Order total</h6>
                <p className="text-primary">
                  US${" "}
                  {shippingAndTaxPrice +
                    productsOrder.products.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.unitPrice * currentValue.qty,
                      0,
                    )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ThanksForOrder;
