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
import profilePicture from "../img/perfil.png";
import background from "../img/bg_dark_grafitti.jpg";
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
        <Container className="">
          <Link to="/" className="text-decoration-none text-white">
            <Navbar.Brand className="d-flex align-items-center">
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
              >
                {user && user.data.roleId === 200 && (
                  <NavDropdown.Item>
                    <Link to="/admin" className="text-decoration-none text-black d-block">
                      Admin
                    </Link>
                  </NavDropdown.Item>
                )}

                {user && (
                  <>
                    <NavDropdown.Item href="/profile" className="text-black">
                      Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/orders" className="text-black">
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
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
                        Sign In
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
