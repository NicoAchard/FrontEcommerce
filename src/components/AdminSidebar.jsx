import { VscTools } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./AdminSidebar.css";

import heybroLogo from "../img/LogoHey.svg";

export default () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className=" col-2 p-0 h-100 position-fixed">
      <div className="d-flex flex-column h-100">
        <h1
          className="d-flex justify-content-center align-items-center text-white py-2 m-0 gap-2"
          style={{ backgroundColor: "#212529" }}
        >
          <img
            src={heybroLogo}
            alt="Logo hey boards"
            className="hey-boards-nav p-1 cursor-pointer"
            onClick={handleHomeClick}
          />
        </h1>
        <div
          className="d-flex flex-column align-items-center gap-1 h-100"
          style={{ backgroundColor: "#292A2D" }}
        >
          <div className="border-bottom border-0 py-4">
            <Link to="/admin" className="btn d-flex p-0 py-1">
              <div
                className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
                style={{ fontSize: "0.9rem" }}
              >
                <VscTools className="fs-3" />
                <span className="d-none d-lg-block admin-text "> Dashboard </span>
              </div>
            </Link>
            <Link to="/admin/products" className="btn d-flex p-0 py-1">
              <div
                className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin "
                style={{ fontSize: "0.9rem" }}
              >
                <BsHandbag className="fs-3" />{" "}
                <span className="d-none d-lg-block admin-text">Products</span>
              </div>
            </Link>
            <Link to="/admin/users" className="btn d-flex p-0 py-1">
              <div
                className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
                style={{ fontSize: "0.9rem" }}
              >
                <HiOutlineUsers className="fs-3" />
                <span className="d-none d-lg-block admin-text"> Users </span>
              </div>
            </Link>
            <Link to="/admin/orders" className="btn d-flex p-0 py-1">
              <div
                className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
                style={{ fontSize: "0.9rem" }}
              >
                <AiOutlineShoppingCart className="fs-3" />{" "}
                <span className="d-none d-lg-block admin-text"> Orders </span>
              </div>
            </Link>
            <Link to="/admin/categories" className="btn d-flex p-0 py-1">
              <div
                className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
                style={{ fontSize: "0.9rem" }}
              >
                <BiCategory className="fs-3" />
                <span className="d-none d-lg-block admin-text"> Categories </span>
              </div>
            </Link>
          </div>
          <Link to="/" className="btn d-flex p-0 py-1">
            <div
              className=" d-flex align-items-center gap-1 rounded p-2 m-3 text-hover-transition bg-hover-sidebar-admin"
              style={{ fontSize: "1.1rem" }}
            >
              <HiArrowUturnLeft className="fs-3" />{" "}
              <span className="d-none d-lg-block admin-text"> Return to Website </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
