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
            <img src="src\img\heybroInvert.png" alt="" className="hey-bro-nav" />
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
                  src="src\img\perfil.png"
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
