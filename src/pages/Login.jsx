import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../img/logoHeyBoards.svg";
import skateLogin from "../img/SkateLogin.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failLogin, setFailLogin] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/tokens`,
        data: {
          email,
          password,
        },
      });
      if (response.data.status === 200) {
        dispatch(SET_USER({ token: response.data.token, data: response.data.data }));
        return navigate("/");
      } else {
        if (response.data.status === 404) {
          setFailLogin(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-sm-6 text-black">
            <div className="d-flex flex-column justify-content-center h-100 align-items-center h-custom-2 p-0 mt-xl-n5">
              <div className="px-5 ms-xl-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="hey-boards-logo mb-4 pe-4 pb-4 cursor-pointer"
                  onClick={handleHomeClick}
                />
              </div>
              <form>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                  Login
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${failLogin && "is-invalid"}`}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    value={email}
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${failLogin && "is-invalid"}`}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    value={password}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                {failLogin && <p className="text-danger">Email o contraseña incorrectos</p>}

                <div className="pt-1 mb-4">
                  <Link to="/" className="link-info">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Log in
                    </button>
                  </Link>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <Link to="/signup" className="text-muted">
                    Forgot password?
                  </Link>
                </p>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="link-info">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={skateLogin}
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
