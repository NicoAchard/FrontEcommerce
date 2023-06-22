import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { MdSkateboarding } from "react-icons/md";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";

export default () => (
  <div className="col-2 p-0 vh-120  ">
    <div className="d-flex flex-column h-100 ">
      <h1
        className="h5 d-flex justify-content-center align-items-center text-white py-3 m-0 gap-2"
        style={{ backgroundColor: "#212529" }}
      >
        <MdSkateboarding />
        Hey Bro!
      </h1>
      <div className="d-flex flex-column py-2 gap-1 h-100" style={{ backgroundColor: "#292A2D" }}>
        <div className="border-bottom border-0 p-3">
          <Link to="/admin" className="btn  w-100 p-0">
            <h2
              className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
              style={{ fontSize: "0.9rem" }}
            >
              <AiOutlineHome className="fs-4" />
              Dashboard
            </h2>
          </Link>
          <Link to="/admin/products" className="btn  w-100 p-0">
            <h2
              className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin "
              style={{ fontSize: "0.9rem" }}
            >
              <BsHandbag className="fs-4" /> Products
            </h2>
          </Link>
          <Link to="/admin/users" className="btn  w-100 p-0">
            <h2
              className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
              style={{ fontSize: "0.9rem" }}
            >
              <HiOutlineUsers className="fs-4" />
              Users
            </h2>
          </Link>
          <Link to="/admin/orders" className="btn  w-100 p-0">
            <h2
              className=" d-flex align-items-center gap-2 rounded p-1 text-hover-transition bg-hover-sidebar-admin"
              style={{ fontSize: "0.9rem" }}
            >
              <AiOutlineShoppingCart className="fs-4" /> Orders
            </h2>
          </Link>
        </div>
        <Link to="/" className="btn  w-100 p-0">
          <h2
            className=" d-flex align-items-center gap-1 rounded p-2 m-3 text-hover-transition bg-hover-sidebar-admin"
            style={{ fontSize: "1.1rem" }}
          >
            <HiArrowUturnLeft className="fs-4" /> Return to Website
          </h2>
        </Link>
      </div>
    </div>
  </div>
);
