import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import axios from "axios";

export default ({ show, setShow }) => {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputImgFile, setInputImgFile] = useState("");

  const [passwordsUnmatch, setPasswordsUnmatch] = useState(false);
  const [responseCreateUser, setResponseCreateUser] = useState(null);

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
        return setResponseCreateUser({ status: 200, message: response.data.response });
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
    <>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register User</Modal.Title>
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
                  responseCreateUser || !handlevalidateEmail(inputEmail)
                    ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                      responseCreateUser.status === 401 &&
                      "is-invalid"
                    : ""
                }`}
                autoFocus
                required
              />
              {responseCreateUser
                ? (!inputEmail || !handlevalidateEmail(inputEmail)) &&
                  responseCreateUser.status === 401 && (
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
                    responseCreateUser
                      ? !inputFirstname && responseCreateUser.status === 401 && "is-invalid"
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
                    responseCreateUser
                      ? !inputLastname && responseCreateUser.status === 401 && "is-invalid"
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
                    responseCreateUser
                      ? !inputPhoneNumber && responseCreateUser.status === 401 && "is-invalid"
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
                    responseCreateUser
                      ? !inputAddress && responseCreateUser.status === 401 && "is-invalid"
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
                    responseCreateUser
                      ? !inputPassword && responseCreateUser.status === 401 && "is-invalid"
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
                    responseCreateUser
                      ? !inputPasswordRepeat && responseCreateUser.status === 401 && "is-invalid"
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
          {responseCreateUser ? (
            <span
              style={
                responseCreateUser.status === 200
                  ? { fontSize: "0.9rem", color: "green" }
                  : { fontSize: "0.9rem", color: "red" }
              }
            >
              {responseCreateUser.message}
            </span>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
