import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { RiLoader2Line } from "react-icons/ri";
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
            <Card.Header className="h-100 d-flex align-items-center border-bottom border-gray-200 p-4 row g-xxl-6 p-xxl-6">
              <div class="row">
                <div class="col-2">
                  <h4>Título 1</h4>
                  <p>Contenido del párrafo 1</p>
                </div>
                <div class="col-2">
                  <h4>Título 2</h4>
                  <p>Contenido del párrafo 2</p>
                </div>
                <div class="col-2">
                  <h4>Título 3</h4>
                  <p>Contenido del párrafo 3</p>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <div className="d-none d-md-block">
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
            <Card.Body>
              <div className="row">
                <div className="col-3">
                  <img src="" alt="" />
                </div>
                <div className="col-9">
                  <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <h5 className="mb-0">Nombre Producto</h5>
                    <h5 className="mb-0">USD 195</h5>
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

              <div className="mt-6 d-flex flex-column flex-sm-row justify-content-between">
                <div className="d-none d-md-block">
                  <span>Status</span>
                  <span>Processing</span>
                </div>
                <div className="d-flex me-5">
                  <NavLink className="nav-link me-3" to="/ruta1">
                    Enlace 1
                  </NavLink>
                  <span className="border-right"></span>
                  <NavLink className="nav-link" to="/ruta2">
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
