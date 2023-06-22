import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default ({ show, setShow }) => {
  const [inputCategoryName, setInputCategoryName] = useState(null);
  const [inputCategoryDescription, setInputCategoryDescription] = useState(null);
  const [responseCreateCategory, setResponseCreateCategory] = useState(null);
  const token = useSelector((state) => state.user.token);

  const handleSubmit = async () => {
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/categories`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: inputCategoryName,
        description: inputCategoryDescription,
      },
    });
    console.log(response.data);
    if (response.data.status === 200) {
      return setResponseCreateCategory(200);
    }
    if (response.data.status === 400) {
      return setResponseCreateCategory(400);
    }
    if (response.data.status === 401) {
      //Averiguar codigos de error para esats situaciones

      setResponseCreateCategory(401);
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Skateboard"
                value={inputCategoryName}
                onChange={(event) => setInputCategoryName(event.target.value)}
                className={`${
                  !inputCategoryName && responseCreateCategory === 401 && "is-invalid"
                }`}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Category description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required={true}
                value={inputCategoryDescription}
                className={`${
                  !inputCategoryDescription && responseCreateCategory === 401 && "is-invalid"
                }`}
                onChange={(event) => setInputCategoryDescription(event.target.value)}
              />
            </Form.Group>
          </Form>
          {responseCreateCategory ? (
            responseCreateCategory === 200 ? (
              <span style={{ fontSize: "0.9rem", color: "green" }}>
                Category Created succesfull!!
              </span>
            ) : responseCreateCategory === 401 ? (
              <span style={{ fontSize: "0.9rem", color: "red" }}>
                <span style={{ fontSize: "0.9rem", color: "red" }}>
                  Please enter the requested information.
                </span>
              </span>
            ) : (
              <span style={{ fontSize: "0.9rem", color: "red" }}>
                Something went wrong. Please try again later!!
              </span>
            )
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
