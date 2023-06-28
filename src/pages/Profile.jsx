import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/userSlice";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  const [avatar, setAvatar] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsUnmatch, setPasswordsUnmatch] = useState(false);

  let userData = null;
  if (user) {
    userData = user.data;
  }

  useEffect(() => {
    if (userData) {
      setAvatar(userData.avatar);
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      setAddress(userData.address);
      setPhone_number(userData.phone_number);
    }
  }, [userData]);

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

    if (password === repeatPassword) {
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
        url: `${import.meta.env.VITE_API_URL}/users/${userData.id}`,
        data: formdata,
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setPasswordsUnmatch(false);

      console.log(user);
      //Good
      if (response.data.status === 200) {
        console.log(response.data);
        dispatch(SET_USER({ token: user.token, data: response.data.user }));
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
  };

  return (
    <div className="">
      <Navbar />

      <div
        className="d-flex  flex-column justify-content-center align-items-center h-100 "
        style={{ height: "100vh", marginTop: "4.5rem" }}
      >
        <div className="text-center my-5">
          <h1>Profile</h1>
          <p>This information will be displayed publicly so be careful with what you share.</p>
        </div>
        <form style={{ width: "23rem" }} className="w-50" onSubmit={(event) => handleSubmit(event)}>
          <div className="form-outline mb-4 d-flex align-items-center">
            <div className="col-4 d-flex align-items-center">
              <label className="form-label" htmlFor="photo" style={{ marginTop: "8px" }}>
                Photo
              </label>
            </div>
            <div className="col-8 d-flex align-items-center">
              <img
                alt="Profile"
                src={avatar}
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
            <div className="col-5">
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
            <div className="col-5">
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
            <div className="col-8">
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
            <div className="col-8">
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
            <div className="col-5">
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
          <div className="form-outline mb-4 d-flex">
            <div className="col-4">
              <label className="form-label" htmlFor="password" style={{ marginTop: "8px" }}>
                Password
              </label>
            </div>
            <div className="col-5">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordsUnmatch && (
                <span style={{ fontSize: "0.9rem", color: "red" }}>Passwords do not match.</span>
              )}
            </div>
          </div>
          <hr />
          <div className="form-outline mb-4 d-flex">
            <div className="col-4">
              <label className="form-label" htmlFor="repeatPassword" style={{ marginTop: "8px" }}>
                Repeat Password
              </label>
            </div>
            <div className="col-5">
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
          <button className="btn btn-dark btn-lg btn-block" type="submit">
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
