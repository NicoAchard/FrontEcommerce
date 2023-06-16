import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdSkateboarding } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const handlerCart = (value) => {
    setShowCart(!value);
    console.log(value);
  };
  return (
    <div className="position-relative">
      <Cart show={showCart} handlerCart={handlerCart} />
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
              <button
                className="text-decoration-underline text-white btn d-flex gap-2 align-items-center"
                onClick={() => handlerCart(showCart)}
              >
                <AiOutlineShoppingCart size={28} />
                <h6 className="m-0">0</h6>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
