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
        <Container className="px-3 p-lg-0 ">
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
            <Nav className="gap-3 mt-2 mt-lg-0 d-flex align-items-lg-center ">
              <Link to="/products" className="text-decoration-none text-white nav-text">
                Products
              </Link>
              <Link to="/about-this-project" className="text-decoration-none text-white nav-text">
                About this project
              </Link>
              <div className=" d-lg-none gap-3  mt-lg-0 d-flex flex-column align-items-lg-center">
                {user && (
                  <>
                    <Link to="/profile" className="text-white text-decoration-none nav-text">
                      Profile
                    </Link>

                    <Link to="/orders" className="text-white text-decoration-none nav-text">
                      Orders
                    </Link>

                    {user.data.roleId === 200 && (
                      <Link to="/admin" className="text-white text-decoration-none nav-text">
                        Admin
                      </Link>
                    )}

                    <Link
                      onClick={handleLogout}
                      className="text-white text-decoration-none pb-3 nav-text"
                    >
                      Logout
                    </Link>
                  </>
                )}
                {!user && (
                  <>
                    <Link to="/login" className="d-block text-decoration-none text-white nav-text">
                      Login
                    </Link>
                    <Link to="/signup" className="d-block text-decoration-none text-white nav-text">
                      Sign up
                    </Link>
                  </>
                )}
              </div>
              <NavDropdown
                title={
                  user ? (
                    <img
                      src={`${import.meta.env.VITE_API_IMG}/${user.data.avatar}`}
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
                <div className="px-2">
                  {user && user.data.roleId === 200 && (
                    <Link to="/admin" className="text-decoration-none text-black d-block nav-text">
                      Admin
                    </Link>
                  )}

                  {user && (
                    <>
                      <Link
                        to="/profile"
                        className="text-decoration-none d-block text-black nav-text"
                      >
                        Profile
                      </Link>

                      <Link
                        to="/orders"
                        className="text-decoration-none d-block text-black nav-text"
                      >
                        Orders
                      </Link>
                      <NavDropdown.Divider />
                      <Link
                        onClick={handleLogout}
                        className="text-decoration-none d-block text-black nav-text"
                      >
                        Logout
                      </Link>
                    </>
                  )}
                </div>
                {!user && (
                  <>
                    <NavDropdown.Item>
                      <Link
                        to="/login"
                        className="text-decoration-none text-black d-block nav-text"
                      >
                        Login
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/signup"
                        className="text-decoration-none text-black d-block nav-text"
                      >
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
