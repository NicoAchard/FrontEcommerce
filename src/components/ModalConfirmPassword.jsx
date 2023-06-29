import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

export default ({ show, setShow, setConfirmPassword }) => {
  const token = useSelector((state) => state.user.token);

  const [inputPassword, setInpuPassword] = useState("");
  const [inputRepeatPassword, setInpuRepeatPassword] = useState("");
  const [passwordStatus, setpasswordStatus] = useState(false);

  useEffect(() => {
    setInpuPassword("");
    setInpuRepeatPassword("");
    setpasswordStatus(null);
  }, [show]);

  const handlePasswordConfirm = async () => {
    if (!inputRepeatPassword) {
      return setpasswordStatus({ message: "Passwords is not valid", code: 400 });
    }
    if (inputRepeatPassword !== inputPassword) {
      return setpasswordStatus({ message: "Passwords do not match", code: 402 });
    }

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users/confirm-password`,
      data: {
        password: inputPassword,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status === 200) {
      setTimeout(() => {
        setConfirmPassword(true);
        setShow((prev) => !prev);
      }, 1000);

      return setpasswordStatus({ message: "Success", code: 200 });
    }
    response.data.status === 401 && setpasswordStatus({ message: "Wrong password", code: 401 });
    response.data.status === 400 &&
      setpasswordStatus({ message: "Something went wrong. Please try again later!!", code: 400 });
  };

  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => setShow((prev) => !prev)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Confirm password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={inputPassword}
              type="password"
              onChange={(event) => setInpuPassword(event.target.value)}
              placeholder="Enter your password..."
              className={` ${
                passwordStatus && inputPassword
                  ? passwordStatus.code !== 200
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              value={inputRepeatPassword}
              type="password"
              onChange={(event) => setInpuRepeatPassword(event.target.value)}
              placeholder="Enter your password..."
              className={` ${
                passwordStatus && inputRepeatPassword
                  ? passwordStatus.code !== 200
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
            />
            {passwordStatus && (
              <span
                style={{
                  fontSize: "0.9rem",
                  color: `${passwordStatus.code === 200 ? "green" : "red"} `,
                }}
              >
                {passwordStatus.message}
              </span>
            )}
          </Form.Group>
          <Button variant="primary" onClick={handlePasswordConfirm}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
