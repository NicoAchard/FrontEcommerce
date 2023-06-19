import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import heybroLogo from "../img/heybroInvert.png";
import profilePicture from "../img/perfil.png";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="position-relative">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="d-flex align-items-center bg-nav"
      >
        <Container>
          <Link to="/" className="text-decoration-none text-white">
            <Navbar.Brand className="d-flex align-items-center">
              <img src={heybroLogo} alt="" className="hey-bro-nav" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-end align-items-center text-end "
          >
            <Nav className=" gap-3 mt-3 mt-lg-0 ">
              <Link to="/products" className="text-decoration-underline text-white  ">
                Products
              </Link>
              <Link to="/about-this-project" className=" text-decoration-underline text-white">
                About us
              </Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="rounded-circle profile-image  "
                  />
                }
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item href="/profile" className="">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
