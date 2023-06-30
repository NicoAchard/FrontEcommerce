import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { format } from "date-fns";
import axios from "axios";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState(null);
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.data.id);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/orders`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userOrders = response.data.filter((order) => order.userId === userId);
        userOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (userOrders.length > 0) {
          return setOrders(userOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <div>
        <NavBar />
        <div style={{ marginTop: "8.5rem" }}>
          {orders ? (
            <div className="container">
              <h3 className="font-weight-bold">Order History</h3>
              <p>
                Check the status of recent orders, manage returns, and discover similar products.
              </p>

              {orders.map((order) => (
                <Card key={order.id} className="my-5">
                  <Card.Header className="h-100 d-flex align-items-center border-bottom p-3">
                    <div className="row justify-content-between text-center w-100">
                      <div className="col-md-6 d-none d-md-block">
                        <h6>Date placed</h6>
                        <p>{format(new Date(order.createdAt), "dd/MM/yy HH:mm")}</p>
                      </div>
                      <div className="col-4 col-md-2">
                        <h6>Total amount</h6>
                        <p>
                          US${" "}
                          {order.products.reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue.unitPrice * currentValue.qty,
                            0,
                          )}
                        </p>
                      </div>
                      <div className="col-4 d-flex align-items-center justify-content-end">
                        <div className="d-none d-md-flex align-items-center justify-content-end">
                          <Button className="m-1 btn-light border">View Order</Button>
                          <Button className="m-1 btn-light border">View Invoice</Button>
                        </div>
                        <div className="d-md-none">
                          <Dropdown>
                            <Dropdown.Toggle variant="light" className="border">
                              Actions
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>View Order</Dropdown.Item>
                              <Dropdown.Item>View Invoice</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Card.Header>
                  {order.products.map((product, index) => (
                    <Card.Body className={`mt-2 ${index > 0 ? "border-top" : ""}`}>
                      <div className="row p-2">
                        <div className="col-3">
                          <img
                            className="d-block w-50"
                            src={`${import.meta.env.VITE_API_IMG}/${product.img[0].url}`}
                            alt={product.name}
                          />
                        </div>
                        <div className="col-9">
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <h6 className="mb-0">{product.name}</h6>
                            <div className="mb-0 d-flex gap-5">
                              <p>
                                US$ <span className="fw-bold"> {product.unitPrice} </span>
                              </p>
                              <p>
                                Quantity: <span className="fw-bold"> {product.qty}</span>
                              </p>
                            </div>
                          </div>
                          <div className="d-none d-md-block mt-2">
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 d-flex flex-column flex-lg-row justify-content-between px-3">
                        <div className="d-md-block mt-2">
                          <span>Status: </span>
                          <span className="text-success">
                            <AiOutlineReload /> Processing
                          </span>
                        </div>
                        <div className="d-flex justify-content-around justify-md-content-end mt-3">
                          <NavLink className="nav-link me-3 text-primary" to="/products">
                            View Product
                          </NavLink>
                          <NavLink className="nav-link ms-3 text-primary" to="/products">
                            Buy again
                          </NavLink>
                        </div>
                      </div>
                    </Card.Body>
                  ))}
                </Card>
              ))}
            </div>
          ) : (
            <div className="container border shadow rounded p-3">
              <h3>No Pending Orders</h3>
              <p>
                Currently, you have no pending orders. This is the perfect time to explore our
                <b>wide range of products</b> and make your first purchase! Discover{" "}
                <b>high-quality items</b> and enjoy an exceptional shopping experience.
              </p>
              <p>
                <b>Click</b> the button below to start your shopping experience right away.
              </p>
              <NavLink to="/products" className="btn btn-warning border-dark ">
                Explore Products
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Orders;
