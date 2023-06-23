import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { SET_USER } from "../redux/userSlice";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  const userData = useSelector((state) => state.user.data);
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

  const [inputFirstname, setInputFirstname] = useState(userData ? userData.firstname : "");
  const [inputLastname, setInputLastname] = useState(userData ? userData.lastname : "");
  const [inputEmail, setInputEmail] = useState(userData ? userData.email : "");
  const [inputPassword, setInputPassword] = useState("");
  const [inputRepeatPassword, setInputRepeatPassword] = useState("");

  const [inputAddress, setInputAddress] = useState(userData ? userData.address : "");
  const [inputPhone_Number, setInputPhone_Number] = useState(userData ? userData.phone_number : "");
  const [emailError, setEmailError] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleAvatar = (event) => {
    const image = event.target.files[0];
    setAvatar(image);
  };

  async function handlerSubmit(event) {
    event.preventDefault();

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

    if (response.data.error) {
      console.log("Credenciales inválidas repetición");
      setEmailError(true);
    } else {
      dispatch(SET_USER({ token: response.data.token, data: response.data.data }));

      if (inputPassword !== inputRepeatPassword) {
        setPasswordMatch(false);
      } else navigate("/");
    }
  }

  return (
    <div className="">
      <Navbar />

      <div
        className="d-flex  flex-column justify-content-center align-items-center h-100"
        style={{ height: "100vh", marginTop: "4.5rem" }}
      >
        <div className="text-center">
          <h1>Profile</h1>
          <p>This information will be displayed publicly so be careful what you share.</p>
        </div>
        <form style={{ width: "23rem" }} onSubmit={handlerSubmit} className="">
          <div className="form-outline mb-4 d-flex align-items-center">
            <div className="col-4 d-flex align-items-center">
              <label className="form-label" htmlFor="photo" style={{ marginTop: "8px" }}>
                Photo
              </label>
            </div>
            <div className="col-8 d-flex align-items-center">
              <img
                alt="Profile"
                className="rounded-circle profile-image me-2"
                id="photo"
                onChange={handleAvatar}
              />
              <button className="btn btn-sm btn-outline-secondary">Change Photo</button>
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
                value={inputFirstname}
                onChange={(event) => setInputFirstname(event.target.value)}
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
                value={inputLastname}
                onChange={(event) => setInputLastname(event.target.value)}
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
              {emailError && (
                <div style={{ fontSize: "0.8rem" }} className="text-danger">
                  Email already exists, please use another Email.
                </div>
              )}
              <input
                type="email"
                name="email"
                id="email"
                className={`form-control form-control-lg ${emailError && "is-invalid"}`}
                value={inputEmail}
                onChange={(event) => setInputEmail(event.target.value)}
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
                value={inputAddress}
                onChange={(event) => setInputAddress(event.target.value)}
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
                value={inputPhone_Number}
                onChange={(event) => setInputPhone_Number(event.target.value)}
              />
            </div>
          </div>
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
                value={inputRepeatPassword}
                onChange={(event) => setInputRepeatPassword(event.target.value)}
                className="form-control form-control-lg"
              />
            </div>
          </div>
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
                value={inputPassword}
                onChange={(event) => setInputPassword(event.target.value)}
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
