import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { MdSkateboarding } from "react-icons/md";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 p-0 vh-100">
        <div className="d-flex flex-column h-100">
          <h1
            className="h5 d-flex justify-content-center align-items-center text-white py-3 m-0 gap-2"
            style={{ backgroundColor: "#212529" }}
          >
            <MdSkateboarding />
            Hey Bro!
          </h1>
          <div
            className="d-flex flex-column py-2 gap-1 h-100"
            style={{ backgroundColor: "#292A2D" }}
          >
            <div className="border-bottom border-0 p-3">
              <h2
                className=" d-flex align-items-center gap-2 rounded p-1"
                style={{ fontSize: "0.9rem", color: "#BAC2D1" }}
              >
                <AiOutlineHome className="fs-4" />
                Dashboard
              </h2>
              <h2
                className=" d-flex align-items-center gap-2 rounded p-1"
                style={{ fontSize: "0.9rem", color: "#BAC2D1" }}
              >
                <BsHandbag className="fs-4" /> Products
              </h2>
              <h2
                className=" d-flex align-items-center gap-2 rounded p-1"
                style={{ fontSize: "0.9rem", color: "#BAC2D1" }}
              >
                <HiOutlineUsers className="fs-4" />
                Users
              </h2>
              <h2
                className=" d-flex align-items-center gap-2 rounded p-1"
                style={{ fontSize: "0.9rem", color: "#BAC2D1" }}
              >
                <AiOutlineShoppingCart className="fs-4" /> Orders
              </h2>
            </div>
            <h2
              className=" d-flex align-items-center gap-2 rounded p-3"
              style={{ fontSize: "1.1rem", color: "#BAC2D1" }}
            >
              <HiArrowUturnLeft className="fs-4" /> Return to Website
            </h2>
          </div>
        </div>
      </div>
      <div className="col d-flex flex-column p-0">
        <div className="d-flex justify-content-between py-3 px-2 border-bottom shadow-sm -0">
          <span>Administration Panel</span>{" "}
          <img
            src="src\img\perfil-pedorro.png"
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </div>
        <div></div>
      </div>
    </div>
  </div>
);
