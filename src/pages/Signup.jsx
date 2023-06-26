import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone_Number, setInputPhone_Number] = useState("");
  const [inputRepeatPassword, setInputRepeatPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const [passwordsUnmatch, setPasswordsUnmatch] = useState(false);
  const [responseCreateUser, setResponseCreateUser] = useState(null);

  const handleAvatar = (event) => {
    const image = event.target.files[0];
    setAvatar(image);
  };

  const handlevalidateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function handlerSubmit(event) {
    event.preventDefault();
    if (inputPassword === inputRepeatPassword) {
      const formdata = new FormData();

      formdata.append("email", inputEmail);
      formdata.append("password", inputPassword);
      formdata.append("firstname", inputFirstname);
      formdata.append("lastname", inputLastname);
      formdata.append("address", inputAddress);
      formdata.append("phone_number", inputPhone_Number);
      formdata.append("avatar", avatar);

      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/users`,
        data: formdata,
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setPasswordsUnmatch(false);

      //Good
      if (response.data.status === 200) {
        dispatch(SET_USER({ token: response.data.token, data: response.data.data }));
        setResponseCreateUser({ status: 200, message: response.data.response });
        return navigate("/");
      }
      //Unexpected error
      if (response.data.status === 400) {
        return setResponseCreateUser({ status: 400, message: response.data.response });
      }
      //Missed field
      if (response.data.status === 401) {
        return setResponseCreateUser({ status: 401, message: response.data.response });
      }
      //Already exist that email in the System
      if (response.data.status === 402) {
        return setResponseCreateUser({ status: 402, message: response.data.response });
      }
    } else {
      setPasswordsUnmatch(true);
    }
  }

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex flex-column h-100 align-items-center justify-content-center h-custom-2 px-5 ms-xl-4  pt-5 pt-xl-0 mt-xl-n5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <img src="src\img\LogoHeyBoards2.svg" alt="Logo" className="hey-bro-nav mb-4" />
              </div>
              <form onSubmit={handlerSubmit}>
                <h3 className="fw-normal" style={{ letterSpacing: "1px" }}>
                  Sign Up
                </h3>

                <div className="form-outline mb-2">
                  {responseCreateUser
                    ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                      responseCreateUser.status === 401 && (
                        <span style={{ fontSize: "0.9rem", color: "red" }}>
                          The entered email is not valid. Please provide a valid email address
                        </span>
                      )
                    : ""}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    className={`form-control  ${
                      responseCreateUser
                        ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                          responseCreateUser.status === 401 &&
                          "is-invalid"
                        : ""
                    }`}
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                    required
                  />

                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className={`form-control ${
                          responseCreateUser
                            ? !inputFirstname && responseCreateUser.status === 401 && "is-invalid"
                            : ""
                        } `}
                        value={inputFirstname}
                        onChange={(event) => setInputFirstname(event.target.value)}
                        required
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
                        className={`form-control  ${
                          responseCreateUser
                            ? !inputLastname && responseCreateUser.status === 401 && "is-invalid"
                            : ""
                        }`}
                        value={inputLastname}
                        onChange={(event) => setInputLastname(event.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="lastname">
                        Lastname
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        className={`form-control ${
                          responseCreateUser
                            ? !inputPhone_Number &&
                              responseCreateUser.status === 401 &&
                              "is-invalid"
                            : ""
                        }`}
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
                        className={`form-control ${
                          responseCreateUser
                            ? !inputAddress && responseCreateUser.status === 401 && "is-invalid"
                            : ""
                        }`}
                        value={inputAddress}
                        onChange={(event) => setInputAddress(event.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className={`form-control ${
                          responseCreateUser
                            ? !inputPassword && responseCreateUser.status === 401 && "is-invalid"
                            : ""
                        }`}
                        value={inputPassword}
                        onChange={(event) => setInputPassword(event.target.value)}
                        required
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
                        className={`form-control ${passwordsUnmatch && "is-invalid"} ${
                          responseCreateUser
                            ? !inputRepeatPassword &&
                              responseCreateUser.status === 401 &&
                              "is-invalid"
                            : ""
                        }`}
                        required
                      />{" "}
                      {passwordsUnmatch && (
                        <span style={{ fontSize: "0.9rem", color: "red" }}>
                          Passwords do not match.
                        </span>
                      )}
                      <label className="form-label" htmlFor="repeatPassword">
                        Repeat password
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline">
                  <input
                    className="form-control"
                    name="avatar"
                    id="avatar"
                    type="file"
                    onChange={handleAvatar}
                  />
                  <label className="form-label" htmlFor="avatar">
                    Profile Image
                  </label>
                </div>
                {responseCreateUser ? (
                  <span
                    style={
                      responseCreateUser.status !== 200
                        ? { fontSize: "0.9rem", color: "red" }
                        : { color: "green" }
                    }
                  >
                    {responseCreateUser.message}
                  </span>
                ) : (
                  ""
                )}
                <div className="pt-1 mb-2">
                  <button className="btn btn-dark btn-lg btn-block" type="submit">
                    Sign Up
                  </button>
                </div>

                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="link-info">
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
