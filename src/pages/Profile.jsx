import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// import { SET_USER } from "../redux/userSlice";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  const user = useSelector((state) => state.user);
  let userData = null;
  if (user) {
    userData = useSelector((state) => state.user.data);
  }

  useEffect(() => {
    if (userData) {
      document.getElementById("firstname").value = userData.firstname;
      document.getElementById("lastname").value = userData.lastname;
      document.getElementById("email").value = userData.email;
      document.getElementById("address").value = userData.address;
      document.getElementById("phone").value = userData.phone_number;
      document.getElementById("photo").src = userData.avatar;
    }
  }, [userData]);

  return (
    <div className="">
      <Navbar />

      <div
        className="d-flex  flex-column justify-content-center align-items-center h-100 "
        style={{ height: "100vh", marginTop: "4.5rem" }}
      >
        <div className="text-center my-5">
          <h1>Profile</h1>
          <p>This information will be displayed publicly so be careful what you share.</p>
        </div>
        <form style={{ width: "23rem" }} className="w-50">
          <div className="form-outline mb-4 d-flex align-items-center">
            <div className="col-4 d-flex align-items-center">
              <label className="form-label" htmlFor="photo" style={{ marginTop: "8px" }}>
                Photo
              </label>
            </div>
            <div className="col-8 d-flex align-items-center">
              <img alt="Profile" className="rounded-circle profile-image me-2" id="photo" />
              <button className="btn btn-sm btn-outline-secondary" type="button">
                Change Photo
              </button>
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
              />
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
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
