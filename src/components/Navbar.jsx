import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdSkateboarding } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
      className="d-flex align-items-center"
    >
      <Container>
        <Link to="/" className="text-decoration-none text-white">
          <Navbar.Brand className="d-flex align-items-center">
            <MdSkateboarding className="mr-2 " /> Hey Bro!
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-end align-items-center text-end "
        >
          <Nav className=" gap-1 ">
            <Nav.Link to="/products" className="text-decoration-underline text-white w-100 ">
              Products
            </Nav.Link>
            <Nav.Link
              to="/about-this-project"
              className="text-decoration-underline text-white w-100"
            >
              About this project
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <img
                  src="src\img\perfil.png"
                  alt="Profile"
                  className="rounded-circle profile-image  "
                />
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/products" className="my-auto w-100 align-self-end ">
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <AiOutlineShoppingCart size={28} />
                <h6 className="m-0 ">0</h6>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
