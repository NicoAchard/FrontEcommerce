import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const notify = () =>
    toast(
      <div>
        <div style={{ marginBottom: "0.5rem", textAlign: "center" }}>Database reset!</div>
        <div style={{ fontSize: "1rem", textAlign: "center" }}>♻️ Please refresh the page ♻️</div>
      </div>,
    );
  const handleResetSeeders = async () => {
    try {
      await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/runAllSeeders`,
      });

      console.log("Database reset successful");
    } catch (error) {
      console.error("Failed to reset database", error);
    }
  };

  return (
    <div className={`offCanvas  border p-4 ${showOffCanvas ? "show-offCanvas" : ""}`} ref={cartRef}>
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        progressStyle={{ backgroundColor: "#52C9B0" }}
        pauseOnHover={false}
      />
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
          This e-commerce website is a project developed by students of the{" "}
          <span>
            <Link
              className="text-decoration-none"
              to="https://ha.dev/cursos/bootcamp-desarrollo-web"
              target="_blank"
            >
              Hack Academy Coding Bootcamp
            </Link>
          </span>
          .
        </p>
        <Link
          to="/about-this-project"
          style={{ width: "200px", margin: "auto" }}
          className="btn btn-success d-flex justify-content-center mt-5 "
        >
          More info
        </Link>
      </div>

      <hr />
      <div>
        <div className="d-flex gap-2 ">
          <FaUserAlt className="mt-1" />

          <h5>Test user</h5>
        </div>
        <div>
          <p>To simplify access to the application, the following test users are provided:</p>
          <p>
            Login as <span className="fw-bold">buyer:</span>
          </p>
          <ul>
            <li>E-mail: maria.perez@gmail.com</li>
            <li>Password: 1234</li>
          </ul>

          <p>
            Login as <span className="fw-bold"> admin:</span>
          </p>
          <ul>
            <li>E-mail: admin@gmail.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link
            to="/login"
            style={{ width: "200px", margin: "auto" }}
            className="btn btn-success d-flex justify-content-center mt-5"
          >
            Login
          </Link>
          <hr />
        </div>
        <div className="position-fixed" style={{ bottom: "2%" }}>
          {" "}
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => {
              handleResetSeeders();
              notify();
            }}
          >
            Reset Database
          </button>
        </div>
      </div>
    </div>
  );
};
