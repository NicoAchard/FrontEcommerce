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
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center gap-2">
            <Link to="/products" className="text-decoration-underline text-white">
              Products
            </Link>
            <Link to="/about-this-project" className="text-decoration-underline text-white">
              About this project
            </Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <img
                  src="src\img\perfil.png"
                  alt="Profile"
                  className="rounded-circle profile-image"
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
            <Nav.Link href="/products" className="my-auto d-flex ">
              <AiOutlineShoppingCart size={28} />
              <h6 className="mx-1 ">0</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
