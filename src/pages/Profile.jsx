import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../redux/userSlice";
import { useState } from "react";
import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ModalConfirmPassword from "../components/ModalConfirmPassword";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  const [avatar, setAvatar] = useState(user.data.avatar);
  const [firstname, setFirstname] = useState(user.data.firstname);
  const [lastname, setLastname] = useState(user.data.lastname);
  const [email, setEmail] = useState(user.data.email);
  const [address, setAddress] = useState(user.data.address);
  const [phone_number, setPhone_number] = useState(user.data.phone_number);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [passwordsUnmatch, setPasswordsUnmatch] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [responseUpdateUser, setResponseUpdateUser] = useState(0);

  const handleAvatar = (event) => {
    const image = event.target.files[0];
    setAvatar(image);
  };

  const handlevalidateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword && changePassword === true) {
      return setPasswordsUnmatch(true);
    }
    const formdata = new FormData();

    formdata.append("email", email);
    formdata.append("password", password);

    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("address", address);
    formdata.append("phone_number", phone_number);
    formdata.append("avatar", avatar);

    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/users/${user.data.id}`,
      data: formdata,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    setPasswordsUnmatch(false);

    //Good
    if (response.data.status === 200) {
      dispatch(SET_USER({ token: user.token, data: response.data.user }));
      setResponseUpdateUser({ status: 200, message: response.data.response });
      return navigate("/");
    }
    //Unexpected error
    if (response.data.status === 400) {
      return setResponseUpdateUser({ status: 400, message: response.data.response });
    }
    //Missed field
    if (response.data.status === 401) {
      return setResponseUpdateUser({ status: 401, message: response.data.response });
    }
    //Already exist that email in the System
    if (response.data.status === 402) {
      return setResponseUpdateUser({ status: 402, message: response.data.response });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <div>
        <Navbar />
        <ModalConfirmPassword
          show={showModalConfirm}
          setShow={setShowModalConfirm}
          setConfirmPassword={setChangePassword}
        />
        <div
          className="profile d-flex flex-column justify-content-center align-items-center h-100 "
          style={{ height: "100vh", marginTop: "4.5rem" }}
        >
          <div className="text-center my-5">
            <h1>Profile</h1>
            <p>This information will be displayed publicly so be careful with what you share.</p>
          </div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form-outline mb-4 d-flex align-items-center">
              <div className="col-4 d-flex align-items-center">
                <label className="form-label" htmlFor="photo" style={{ marginTop: "8px" }}>
                  Photo
                </label>
              </div>
              <div className="col d-flex align-items-center">
                <img
                  alt="Profile"
                  src={`${import.meta.env.VITE_API_IMG}/${user.data.avatar}`}
                  className="rounded-circle profile-image me-2"
                  id="photo"
                />
                <input
                  className="form-control"
                  name="avatar"
                  id="avatar"
                  type="file"
                  onChange={handleAvatar}
                />
              </div>
            </div>
            <hr />
            <div className="form-outline mb-4 d-flex">
              <div className="col-4">
                <label className="form-label" htmlFor="firstname" style={{ marginTop: "8px" }}>
                  Firstname
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className={`form-control form-control-lg`}
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="form-outline mb-4 d-flex">
              <div className="col-4">
                <label className="form-label" htmlFor="lastname" style={{ marginTop: "8px" }}>
                  Lastname
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className={`form-control form-control-lg`}
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="form-outline mb-4 d-flex">
              <div className="col-4">
                <label className="form-label" htmlFor="email" style={{ marginTop: "8px" }}>
                  Email address
                </label>
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-control form-control-lg `}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="form-outline mb-4 d-flex">
              <div className="col-4">
                <label className="form-label" htmlFor="address" style={{ marginTop: "8px" }}>
                  Street address
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className={`form-control form-control-lg`}
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="form-outline mb-4 d-flex">
              <div className="col-4">
                <label className="form-label" htmlFor="phone" style={{ marginTop: "8px" }}>
                  Phone number
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={`form-control form-control-lg`}
                  value={phone_number}
                  onChange={(event) => setPhone_number(event.target.value)}
                />
              </div>
            </div>
            <hr />
            <button
              className={`btn border mb-4 ${!changePassword ? "btn-light" : "btn-outline-danger"}`}
              onClick={() =>
                !changePassword ? setShowModalConfirm((prev) => !prev) : setChangePassword(false)
              }
              type="button"
            >
              {changePassword ? "Cancel Change password" : "Change password"}
            </button>
            <div className={`${!changePassword && "d-none"}`}>
              <div className="form-outline mb-4 d-flex">
                <div className="col-4">
                  <label className="form-label" htmlFor="password" style={{ marginTop: "8px" }}>
                    Password
                  </label>
                </div>
                <div className="col">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  {passwordsUnmatch && (
                    <span style={{ fontSize: "0.9rem", color: "red" }}>
                      Passwords do not match.
                    </span>
                  )}
                </div>
              </div>
              <hr />
              <div className="form-outline mb-4 d-flex">
                <div className="col-4">
                  <label
                    className="form-label"
                    htmlFor="repeatPassword"
                    style={{ marginTop: "8px" }}
                  >
                    Repeat Password
                  </label>
                </div>
                <div className="col">
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    className="form-control form-control-lg"
                    value={repeatPassword}
                    onChange={(event) => setRepeatPassword(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-dark btn-lg btn-block w-100 mb-5" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
