import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default ({ show, setShow, setProducts }) => {
  const [inputProductName, setInputProductName] = useState("");
  const [inputProductDescription, setInputProductDescription] = useState("");
  const [inputProductHighlight, setInputProductHighlight] = useState("");
  const [inputProductStock, setInputProductStock] = useState("");
  const [inputProductPrice, setInputProductPrice] = useState("");
  const [inputProductPhotos, setInputProductPhotos] = useState(undefined);
  const [inputProductCategoryId, setInputProductCategoryId] = useState("");

  const [responseCreateProduct, setResponseCreateProduct] = useState(null);
  const [responseCategories, setResponseCategories] = useState(null);

  const token = useSelector((state) => state.user.token);

  const handleImage = (event) => {
    const images = event.target.files;
    setInputProductPhotos(images);
  };

  const handleSubmit = async () => {
    if (inputProductStock < 0 || inputProductStock > 32767) {
      return setResponseCreateProduct({
        status: 401,
        message: "Invalid value please insert a number between 0 and 32767",
      });
    }
    const formdata = new FormData();

    formdata.append("name", inputProductName);
    formdata.append("description", inputProductDescription);
    formdata.append("highlight", inputProductHighlight ? inputProductHighlight : 0);
    formdata.append("stock", inputProductStock);
    formdata.append("price", inputProductPrice);
    formdata.append("categoryId", inputProductCategoryId);

    if (inputProductPhotos) {
      for (let i = 0; i < inputProductPhotos.length; i++) {
        formdata.append("photos", inputProductPhotos[i]);
      }
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
      setProducts((prev) => [...prev, response.data.product]);
      setTimeout(() => {
        setInputProductName("");
        setInputProductDescription("");
        setInputProductHighlight("");
        setInputProductStock("");
        setInputProductPrice("");
        setInputProductPhotos("");
        setInputProductCategoryId("");
        setResponseCreateProduct(null);
        setShow((prev) => !prev);
      }, 1500);
    }
    return setResponseCreateProduct({
      status: response.data.status,
      message: response.data.response,
    });
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
                className={`${
                  responseCreateProduct
                    ? ((!inputProductName && responseCreateProduct.status === 401) ||
                        responseCreateProduct.status === 402) &&
                      "is-invalid"
                    : ""
                }`}
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
                  !inputProductDescription && responseCreateProduct
                    ? responseCreateProduct.status === 401 && "is-invalid"
                    : ""
                }`}
                onChange={(event) => setInputProductDescription(event.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    required={true}
                    value={inputProductStock}
                    min={0}
                    max={32767}
                    className={`${
                      responseCreateProduct
                        ? ((!inputProductStock && responseCreateProduct.status === 401) ||
                            inputProductStock < 0 ||
                            inputProductStock > 32767) &&
                          "is-invalid"
                        : ""
                    }`}
                    onChange={(event) => setInputProductStock(event.target.value)}
                  />
                  {responseCreateProduct &&
                    (inputProductStock < 0 || inputProductStock > 32767) && (
                      <span style={{ fontSize: "0.9rem", color: "red" }}>
                        {responseCreateProduct.message}
                      </span>
                    )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput4">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    required={true}
                    value={inputProductPrice}
                    className={`${
                      !inputProductPrice && responseCreateProduct
                        ? responseCreateProduct.status === 401 && "is-invalid"
                        : ""
                    }`}
                    onChange={(event) => setInputProductPrice(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ControlInput8">
              <Form.Label>Photos</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(event) => handleImage(event)}
                value={inputProductPhotos}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput7">
              <Form.Label>Highlight</Form.Label>
              <Form.Check
                type="checkbox"
                required={true}
                checked={inputProductHighlight === "1"}
                className={`${
                  !inputProductHighlight && responseCreateProduct
                    ? responseCreateProduct.status === 401 && "is-invalid"
                    : ""
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
                  !inputProductCategoryId && responseCreateProduct
                    ? responseCreateProduct.status === 401 && "is-invalid"
                    : ""
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
          {responseCreateProduct && (
            <span
              style={
                responseCreateProduct.status === 200
                  ? { fontSize: "0.9rem", color: "green" }
                  : { fontSize: "0.9rem", color: "red" }
              }
            >
              {responseCreateProduct.message}
            </span>
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
