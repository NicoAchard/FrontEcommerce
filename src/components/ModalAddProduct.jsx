import { Modal, Form, Button, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ show, setShow }) => {
  const [inputProductName, setInputProductName] = useState(null);
  const [inputProductDescription, setInputProductDescription] = useState(null);
  const [inputProductHighlight, setInputProductHighlight] = useState(null);
  const [inputProductStock, setInputProductStock] = useState(null);
  const [inputProductPrice, setInputProductPrice] = useState(null);
  const [inputProductPhotos, setInputProductPhotos] = useState(null);
  const [inputProductCategoryId, setInputProductCategoryId] = useState(null);

  const [responseCreateProduct, setResponseCreateProduct] = useState(null);
  const [responseCategories, setResponseCategories] = useState(null);

  const token = useSelector((state) => state.user.token);

  const handleImage = (event) => {
    const images = event.target.files;
    setInputProductPhotos(images);
  };

  const handleSubmit = async () => {
    const formdata = new FormData();

    formdata.append("name", inputProductName);
    formdata.append("description", inputProductDescription);
    formdata.append("highlight", inputProductHighlight);
    formdata.append("stock", inputProductStock);
    formdata.append("price", inputProductPrice);
    formdata.append("categoryId", inputProductCategoryId);

    for (let i = 0; i < inputProductPhotos.length; i++) {
      formdata.append("photos", inputProductPhotos[i]);
    }

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products`,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
      data: formdata,
    });

    if (response.data.status === 200) {
      return setResponseCreateProduct(200);
    }
    if (response.data.status === 400) {
      return setResponseCreateProduct(400);
    }
    if (response.data.status === 401) {
      setResponseCreateProduct(401);
    }
  };
  useEffect(() => {
    const handleCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/categories`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResponseCategories(response.data.categories);
    };
    handleCategories();
  }, []);

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="controlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={inputProductName}
                onChange={(event) => setInputProductName(event.target.value)}
                className={`${!inputProductName && responseCreateProduct === 401 && "is-invalid"}`}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required={true}
                value={inputProductDescription}
                className={`${
                  !inputProductDescription && responseCreateProduct === 401 && "is-invalid"
                }`}
                onChange={(event) => setInputProductDescription(event.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="text"
                    required={true}
                    value={inputProductStock}
                    className={`${
                      !inputProductStock && responseCreateProduct === 401 && "is-invalid"
                    }`}
                    onChange={(event) => setInputProductStock(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput4">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    required={true}
                    value={inputProductPrice}
                    className={`${
                      !inputProductPrice && responseCreateProduct === 401 && "is-invalid"
                    }`}
                    onChange={(event) => setInputProductPrice(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ControlInput8">
              <Form.Label>Photos</Form.Label>
              <Form.Control type="file" multiple onChange={(event) => handleImage(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput7">
              <Form.Label>Highlight</Form.Label>
              <Form.Check
                type="checkbox"
                required={true}
                checked={inputProductHighlight === "1"}
                className={`${
                  !inputProductHighlight && responseCreateProduct === 401 && "is-invalid"
                }`}
                onChange={(event) => setInputProductHighlight(event.target.checked ? "1" : "0")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlInput5">
              <Form.Label>Category Id</Form.Label>
              <Form.Select
                required={true}
                value={inputProductCategoryId}
                className={`${
                  !inputProductCategoryId && responseCreateProduct === 401 && "is-invalid"
                }`}
                onChange={(event) => setInputProductCategoryId(event.target.value)}
              >
                <option value="">Select a category</option>
                {responseCategories &&
                  responseCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Form>
          {responseCreateProduct ? (
            responseCreateProduct === 200 ? (
              <span style={{ fontSize: "0.9rem", color: "green" }}>
                Product Created successfully!!
              </span>
            ) : responseCreateProduct === 401 ? (
              <span style={{ fontSize: "0.9rem", color: "red" }}>
                Please enter the requested information.
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
