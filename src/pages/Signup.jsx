import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/userSlice";

function SignUp() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone_Number, setInputPhone_Number] = useState("");
  const [inputRepeatPassword, setInputRepeatPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlerSubmit(event) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users`,
      data: {
        email: inputEmail,
        password: inputPassword,
        firstname: inputFirstname,
        lastname: inputLastname,
        address: inputAddress,
        phone_number: inputPhone_Number,
      },
    });
    if (response.data.error) {
      console.log("Credenciales inválidas repetición");
    }

    dispatch(SET_USER(response.data.token));

    if (inputPassword !== inputRepeatPassword) {
      setPasswordMatch(false);
    } else navigate("/");
  }
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <img src="src\img\heybroInvert.png" alt="Logo" className="hey-bro-nav" />
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }} onSubmit={handlerSubmit}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                  Sign Up
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-lg"
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control form-control-lg"
                        value={inputFirstname}
                        onChange={(event) => setInputFirstname(event.target.value)}
                      />

                      <label className="form-label" htmlFor="firstname">
                        Firstname
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control form-control-lg"
                        value={inputLastname}
                        onChange={(event) => setInputLastname(event.target.value)}
                      />
                      <label className="form-label" htmlFor="lastname">
                        Lastname
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        className="form-control form-control-lg"
                        value={inputPhone_Number}
                        onChange={(event) => setInputPhone_Number(event.target.value)}
                      />
                      <label className="form-label" htmlFor="phone_number">
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control form-control-lg"
                        value={inputAddress}
                        onChange={(event) => setInputAddress(event.target.value)}
                      />
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col">
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className={`form-control form-control-lg ${
                          passwordMatch ? "" : "is-invalid"
                        }`}
                        value={inputPassword}
                        onChange={(event) => setInputPassword(event.target.value)}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={inputRepeatPassword}
                        onChange={(event) => setInputRepeatPassword(event.target.value)}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="repeatPassword">
                        Repeat password
                      </label>
                    </div>
                  </div>
                </div>
                {!passwordMatch && (
                  <div style={{ fontSize: "0.8rem" }} className="text-danger">
                    Passwords do not match. Please try again.
                  </div>
                )}

                <div className="pt-1 mb-2">
                  <button className="btn btn-dark btn-lg btn-block" type="submit">
                    Sign Up
                  </button>
                </div>

                <p>
                  Already have an account?
                  <Link to="/login" className="link-info">
                    {" "}
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="src/img/skateLogin.jpg"
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

export default SignUp;
