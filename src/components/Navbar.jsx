import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdSkateboarding } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="d-flex align-items-center"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <MdSkateboarding className="mr-2" /> Hey Bro!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="my-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link eventKey={2} href="/about-this-proyect">
              About This Project
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <img
                  src="src\img\perfil-pedorro.png"
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
              <FaOpencart size={28} />
              <h6 className="mx-1 ">0</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
