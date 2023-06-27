import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default ({ show, setShow, name, description, id, setDescription, setName }) => {
  const token = useSelector((state) => state.user.token);
  const [responseUpdateCategory, setResponseUpdateCategory] = useState(null);

  const handleSubmit = async () => {
    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/categories/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        description,
      },
    });

    console.log(response.data);
    if (response.data.status === 200) {
      return setResponseUpdateCategory(200);
    }
    if (response.data.status === 400) {
      return setResponseUpdateCategory(400);
    }
    if (response.data.status === 401) {
      //Averiguar codigos de error para esats situaciones

      setResponseUpdateCategory(401);
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Skateboard"
                value={name}
                onChange={(event) => setName(event.target.value)}
                // className={`${
                //   !inputCategoryName && responseUpdateCategory === 401 && "is-invalid"
                // }`}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Category description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required={true}
                value={description}
                // className={`${
                //   !inputCategoryDescription && responseUpdateCategory === 401 && "is-invalid"
                // }`}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Form>
          {responseUpdateCategory ? (
            responseUpdateCategory === 200 ? (
              <span style={{ fontSize: "0.9rem", color: "green" }}>
                Category Updated succesfull!!
              </span>
            ) : responseUpdateCategory === 401 ? (
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
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
