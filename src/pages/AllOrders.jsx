import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineReload } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./AllOrders.css";

function AllOrders() {
  const [orders, setOrders] = useState(null);
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.data.id);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userOrders = response.data.filter((order) => order.userId === userId);
        setOrders(userOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token, userId]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div style={{ marginTop: "8.5rem" }}>
        <div className="container">
          <h3 className="font-weight-bold">Order History</h3>
          <p>Check the status of recent orders, manage returns, and discover similar products.</p>
          {orders &&
            orders.map((order) => (
              <Card style={{ marginTop: "4.5rem" }}>
                <Card.Header className="h-100 d-flex align-items-center border-bottom  p-4 row ">
                  <div class="row d-flex justify-content-between">
                    <div class="col-4 col-md-2">
                      <h6>Order id</h6>
                      <p>{order.id}</p>
                    </div>
                    <div class="d-none d-md-block  col-md-2 ">
                      <h6>Date placed</h6>
                      <p>{order.createdAt}</p>
                    </div>
                    <div class="col-4 col-md-2">
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

                    <div className="col-4  d-flex justify-content-end ">
                      <div className="d-none d-md-flex  align-items-center justify-content-end">
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
                {order.products.map((product) => (
                  <Card.Body className="mt-4">
                    <div className="row pe-4">
                      <div className="col-3">
                     
                        <img
                          className="d-block w-50"
                          src={`${import.meta.env.VITE_API_IMG}/${product.img[0].url}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="col-9">
                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                          <h6 className="mb-0">{product.name}</h6>
                          <p className="mb-0  bold d-flex gap-5">
                            <span> USD {product.unitPrice}</span>
                            <span> Quantity: {product.qty}</span>
                          </p>
                        </div>
                        <div className="d-none d-md-block">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 d-flex flex-column flex-lg-row justify-content-between px-3">
                      <div className=" d-md-block">
                        <span>Status </span>
                        <AiOutlineReload />
                        <span> Processing</span>
                      </div>
                      <div className=" d-flex justify-content-around justify-md-content-end">
                        <NavLink className="nav-link me-3  " to="/products">
                          View Product
                        </NavLink>

                        <NavLink className="nav-link ms-3 " to="/ruta2">
                          Buy again
                        </NavLink>
                      </div>
                    </div>
                  </Card.Body>
                ))}
              </Card>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllOrders;
