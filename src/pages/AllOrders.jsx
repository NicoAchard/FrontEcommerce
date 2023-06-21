import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineReload } from "react-icons/ai";

import { IoIosArrowDropdownCircle } from "react-icons/Io";
import "./AllOrders.css";

function AllOrders() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div style={{ marginTop: "8.5rem" }}>
        <div className="container">
          <h3 className="font-weight-bold">Order History</h3>
          <p>Check the status of recent orders, manage returns, and discover similar products.</p>
          <Card style={{ marginTop: "4.5rem" }}>
            <Card.Header className="h-100 d-flex align-items-center border-bottom  px-4 row ">
              <div class="row d-flex justify-content-between  align-items-center">
                <div class="col-4 col-md-2">
                  <h6>Order id</h6>
                  <p>244a4cd8-ef2f-4fe6-8419-f987c3c5e99a</p>
                </div>
                <div class="d-none d-md-block  col-md-2 ">
                  <h6>Date placed</h6>
                  <p>Jun 20, 2023</p>
                </div>
                <div class="col-4 col-md-2">
                  <h6>Total amount</h6>
                  <p>USD 279.00</p>
                </div>

                <div className="col-4  d-flex justify-content-end ">
                  <div className="d-none d-md-flex  align-items-center justify-content-end">
                    <Button className="m-1 btn-light border">View Order</Button>
                    <Button className="m-1 btn-light border">View Invoice</Button>
                  </div>

                  <div className="d-md-none">
                    <Dropdown>
                      <IoIosArrowDropdownCircle />
                      <Dropdown.Menu>
                        <Dropdown.Item>View Order</Dropdown.Item>
                        <Dropdown.Item>View Invoice</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row pe-4">
                <div className="col-3">
                  <img
                    className="img-fluid max-width:100%"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <h6 className="mb-0">Nombre Producto</h6>
                    <p className="mb-0  bold">USD 195</p>
                  </div>
                  <div className="d-none d-md-block">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil incidunt
                      minima quo aliquam animi? Blanditiis aliquid ab aperiam, nam numquam
                      distinctio, eum dolores, ratione repellat aspernatur nobis cupiditate
                      exercitationem explicabo rerum. Quia, asperiores consequuntur quaerat, ducimus
                      beatae quis animi minus esse magni explicabo natus aliquid aut est quas
                      necessitatibus!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 d-flex flex-row justify-content-between px-3">
                <div className="d-none d-md-block">
                  <span>Status </span>
                  <AiOutlineReload />
                  <span> Processing</span>
                </div>
                <div className=" d-md-flex  justify-content-md-end">
                  <NavLink className="nav-link me-3" to="/ruta1">
                    Enlace 1
                  </NavLink>

                  <NavLink className="nav-link ms-3" to="/ruta2">
                    Enlace 2
                  </NavLink>
                </div>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllOrders;
