import { Link } from "react-router-dom";

import "./OffCanvas.css";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default ({ showOffCanvas, setShowOffCanvas }) => {
  const cartRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showOffCanvas && cartRef.current && !cartRef.current.contains(event.target)) {
        setShowOffCanvas(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOffCanvas]);

  const handleClick = () => {
    setShowOffCanvas(!showOffCanvas);
  };
  return (
    <div className={`offCanvas  border p-4 ${showOffCanvas ? "show-offCanvas" : ""}`} ref={cartRef}>
      <div className=" d-flex justify-content-between ">
        <h5>About this Project</h5>
        <button
          type="button"
          className="btn-close "
          aria-label="Close"
          onClick={handleClick}
        ></button>
      </div>
      <div>
        <p>
          This e-commerce website is a project developed by students of the Hack Academy Coding
          Bootcamp.
        </p>
        <Link to="/about-this-project" className="btn btn-secondary ">
          More info
        </Link>
      </div>

      <hr />
      <div>
        <div className="d-flex gap-2">
          <FaUserAlt />

          <h6>Test user</h6>
        </div>
        <div>
          <p>To simplify access to the application, the following test users are provided:</p>
          <p className="fw-bold">Login as buyer:</p>
          <ul>
            <li>E-mail:</li>
            <li>Password:1234</li>
          </ul>

          <p className="fw-bold">Login as admin:</p>
          <ul>
            <li>E-mail:</li>
            <li>Password:1234</li>
          </ul>
          <Link to="/login" className="btn btn-secondary  ">
            Login
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};
