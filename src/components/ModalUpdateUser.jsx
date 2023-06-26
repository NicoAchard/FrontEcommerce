import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default ({ show, setShow, userId }) => {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputImgFile, setInputImgFile] = useState("");

  const [passwordsUnmatch, setPasswordsUnmatch] = useState(false);
  const [responseUpdateUser, setResponseUpdateUser] = useState(null);

  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    if (userId) {
      const getuser = async (event) => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/users/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setInputEmail(response.data.user.email);
        setInputFirstname(response.data.user.firstname);
        setInputLastname(response.data.user.lastname);
        setInputAddress(response.data.user.address);
        setInputPhoneNumber(response.data.user.phone_number);
      };
      getuser();
    }
  }, [userId]);

  const handleAvatar = (event) => {
    const image = event.target.files[0];
    setInputImgFile(image);
  };

  const handlevalidateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (inputPassword === inputPasswordRepeat) {
      const formdata = new FormData();

      formdata.append("email", inputEmail);
      formdata.append("password", inputPassword);
      formdata.append("firstname", inputFirstname);
      formdata.append("lastname", inputLastname);
      formdata.append("address", inputAddress);
      formdata.append("phone_number", inputPhoneNumber);
      formdata.append("avatar", inputImgFile);

      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_API_URL}/users`,
        data: formdata,
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setPasswordsUnmatch(false);
      //Good
      if (response.data.status === 200) {
        return setResponseUpdateUser({ status: 200, message: response.data.response });
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
    } else {
      setPasswordsUnmatch(true);
    }
  }
  return (
    <>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={inputEmail}
                onChange={(event) => setInputEmail(event.target.value)}
                className={`${
                  responseUpdateUser
                    ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                      responseUpdateUser.status === 401 &&
                      "is-invalid"
                    : ""
                }`}
                autoFocus
                required
              />
              {responseUpdateUser
                ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                  responseUpdateUser.status === 401 && (
                    <span style={{ fontSize: "0.9rem", color: "red" }}>
                      The entered email is not valid. Please provide a valid email address
                    </span>
                  )
                : ""}
            </Form.Group>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100" controlId="ControlInput2">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  value={inputFirstname}
                  onChange={(event) => setInputFirstname(event.target.value)}
                  className={`${
                    responseUpdateUser
                      ? !inputFirstname && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 w-100" controlId="ControlInput3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  value={inputLastname}
                  onChange={(event) => setInputLastname(event.target.value)}
                  className={`${
                    responseUpdateUser
                      ? !inputLastname && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100" controlId="ControlInput4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="09#-###-###"
                  value={inputPhoneNumber}
                  onChange={(event) => setInputPhoneNumber(event.target.value)}
                  className={`${
                    responseUpdateUser
                      ? !inputPhoneNumber && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100" controlId="ControlInput5">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={inputAddress}
                  onChange={(event) => setInputAddress(event.target.value)}
                  className={`${
                    responseUpdateUser
                      ? !inputAddress && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                  required
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100" controlId="ControlInput6">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={inputPassword}
                  onChange={(event) => setInputPassword(event.target.value)}
                  className={`${
                    responseUpdateUser
                      ? !inputPassword && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100" controlId="ControlInput7">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control
                  type="password"
                  value={inputPasswordRepeat}
                  onChange={(event) => setInputPasswordRepeat(event.target.value)}
                  className={` ${passwordsUnmatch && "is-invalid"} ${
                    responseUpdateUser
                      ? !inputPasswordRepeat && responseUpdateUser.status === 401 && "is-invalid"
                      : ""
                  }`}
                  required
                />

                {passwordsUnmatch && (
                  <span style={{ fontSize: "0.9rem", color: "red" }}>Passwords do not match.</span>
                )}
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="ControlInput8">
              <Form.Label>Avatar image</Form.Label>
              <Form.Control type="file" onChange={(event) => handleAvatar(event)} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
          {responseUpdateUser ? (
            <span
              style={
                responseUpdateUser.status === 200
                  ? { fontSize: "0.9rem", color: "green" }
                  : { fontSize: "0.9rem", color: "red" }
              }
            >
              {responseUpdateUser.message}
            </span>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
