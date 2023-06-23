import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LOGOUT } from "../redux/userSlice";
import heybroLogo from "../img/heybroInvert.png";
import profilePicture from "../img/perfil.png";
import background from "../img/bg_dark_grafitti.jpg";
import "./Navbar.css";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div className="position-relative">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="d-flex align-items-center bg-nav "
        style={{ backgroundImage: `url(${background})` }}
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
                {!user && (
                  <>
                    <NavDropdown.Item>
                      <Link to="/login" className="text-decoration-none text-black d-block">
                        Login
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/signup" className="text-decoration-none text-black d-block">
                        Signup
                      </Link>
                    </NavDropdown.Item>
                  </>
                )}
                {user && user.data.roleId === 200 && (
                  <NavDropdown.Item>
                    <Link to="/Admin" className="text-decoration-none text-black d-block">
                      Admin
                    </Link>
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item href="/profile" className="">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(LOGOUT());
                    navigate("/login");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
