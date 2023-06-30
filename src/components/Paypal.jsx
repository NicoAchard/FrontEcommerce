import paypalLogo from "../img/paypalLogo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({ FinishProcess }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  useEffect(() => {
    if (inputEmail && inputPassword) {
      FinishProcess(true);
    } else {
      FinishProcess(false);
    }
  }, [inputEmail, inputPassword]);

  return (
    <>
      <h6 className="text-center" style={{ fontFamily: "sans-serif" }}>
        Login with your PayPal account
      </h6>
      <img className="my-3" src={paypalLogo} alt="paypal logo" />
      <form className="form-control" action="">
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
        <label className="form-label" htmlFor="Password" style={{ fontFamily: "sans-serif" }}>
          Password
        </label>
        <input
          className="form-control"
          name="Password"
          type="text"
          id="Password"
          value={inputPassword}
          onChange={(event) => setInputPassword(event.target.value)}
        />
        <div className="d-flex flex-column justify-content-center">
          <button
            type="button"
            className="btn btn-primary mt-4"
            style={{
              width: "200px",
              margin: "auto",
              backgroundColor: "rgb(37, 59, 128)",
              fontFamily: "sans-serif",
              color: "white",
              border: "none",
            }}
          >
            Login
          </button>
          <div className="text-center mt-2">
            <span style={{ fontFamily: "sans-serif" }}>Don't have an account?</span>
            <Link style={{ fontFamily: "sans-serif" }} className="text-decoration-none">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
