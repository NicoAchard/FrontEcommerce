import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../redux/userSlice";
import heybroLogo from "../img/LogoHey.svg";
import background from "../img/navbar-img.jpg";
import { CgMenuLeftAlt } from "react-icons/cg";
import "./Navbar.css";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(LOGOUT());
    navigate("/login");
  };

  return (
    <div className="position-relative">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="d-flex align-items-center bg-nav"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container className="p-0 pe-1">
          <Link to="/" className="text-decoration-none text-white">
            <Navbar.Brand className="d-flex align-items-center ps-0">
              <img src={heybroLogo} alt="" className="hey-boards-nav cursor" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end align-items-center text-end"
          >
            <Nav className="gap-3 mt-3 mt-lg-0">
              <Link to="/products" className="text-decoration-none text-white">
                Products
              </Link>
              <Link to="/about-this-project" className="text-decoration-none text-white">
                About this project
              </Link>
              <Nav className="d-lg-none">
                {user && (
                  <>
                    <Nav.Link href="/profile" className="text-white">
                      Profile
                    </Nav.Link>
                    <Nav.Link href="/orders" className="text-white">
                      Orders
                    </Nav.Link>
                    {user.data.roleId === 200 && (
                      <Nav.Link href="/admin" className="text-white ">
                        Admin
                      </Nav.Link>
                    )}
                    <Nav.Link onClick={handleLogout} className="text-white ">
                      Logout
                    </Nav.Link>
                  </>
                )}
                {!user && (
                  <>
                    <Link to="/login" className="text-decoration-none text-white">
                      login
                    </Link>
                  </>
                )}
              </Nav>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  user ? (
                    <img
                      src={user.data.avatar ? user.data.avatar : profilePicture}
                      alt="Profile"
                      className="rounded-circle profile-image"
                    />
                  ) : (
                    <CgMenuLeftAlt />
                  )
                }
                id="basic-nav-dropdown"
                align="end"
                className=" d-none d-lg-block"
              >
                {user && user.data.roleId === 200 && (
                  <Nav.Link href="/admin" className="text-decoration-none text-black d-block">
                    Admin
                  </Nav.Link>
                )}

                {user && (
                  <>
                    <Nav.Link href="/profile" className="text-decoration-none text-black">
                      Profile
                    </Nav.Link>

                    <Nav.Link href="/orders" className="text-decoration-none text-black">
                      Orders
                    </Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link onClick={handleLogout} className="text-decoration-none text-black">
                      Logout
                    </Nav.Link>
                  </>
                )}
                {!user && (
                  <>
                    <NavDropdown.Item>
                      <Link to="/login" className="text-decoration-none text-black d-block">
                        Login
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/signup" className="text-decoration-none text-black d-block">
                        Sign Up
                      </Link>
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
