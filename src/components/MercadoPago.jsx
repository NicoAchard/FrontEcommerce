import { useState, useEffect } from "react";
import mercadoPagoLogo from "../img/mercado-pago.svg";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default ({ FinishProcess }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const notify = () => toast("This functionality is under development");
  useEffect(() => {
    if (inputEmail && inputPassword) {
      FinishProcess(true);
    } else {
      FinishProcess(false);
    }
  }, [inputEmail, inputPassword]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        progressStyle={{ backgroundColor: "#52C9B0" }}
      />
      <div className="w-100 px-3 px-md-0" style={{ maxWidth: "500px" }}>
        <h6 className="text-center" style={{ fontFamily: "sans-serif" }}>
          Login with your Mercado Pago account
        </h6>
        <div className="d-flex justify-content-center">
          <img className="my-3 w-75" src={mercadoPagoLogo} alt="mercado pago logo" />
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="email" style={{ fontFamily: "sans-serif" }}>
              Email
            </label>
            <input
              className="form-control"
              name="email"
              type="email"
              id="email"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Password" style={{ fontFamily: "sans-serif" }}>
              Password
            </label>
            <input
              className="form-control"
              name="Password"
              type="password"
              id="Password"
              value={inputPassword}
              onChange={(event) => setInputPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                backgroundColor: "rgb(85, 195, 250)",
                fontFamily: "sans-serif",
                color: "white",
                border: "none",
              }}
              onClick={notify}
            >
              Login
            </button>
            <div className="text-center mt-2">
              <span style={{ fontFamily: "sans-serif" }}>Don't have an account?</span>
              <Link
                style={{ fontFamily: "sans-serif" }}
                className="text-decoration-none"
                onClick={notify}
              >
                {" "}
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
