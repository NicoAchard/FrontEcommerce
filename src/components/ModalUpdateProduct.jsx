import { Button, Modal, Form, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({
  show,
  setShow,
  id,
  name,
  setName,
  description,
  setDescription,
  highlight,
  setHighlight,
  stock,
  setStock,
  price,
  setPrice,
  photos,
  setPhotos,
  categoryId,
  setCategoryId,
  photoGallery,
  setPhotoGallery,
  setProducts,
}) => {
  const token = useSelector((state) => state.user.token);
  const [responseUpdateProduct, setResponseUpdateProduct] = useState(null);
  const [responseCategories, setResponseCategories] = useState(null);

  const handleSubmit = async () => {
    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("highlight", highlight);
    formdata.append("stock", stock);
    formdata.append("price", price);
    formdata.append("categoryId", categoryId);

    for (let i = 0; i < photos.length; i++) {
      formdata.append("photos", photos[i]);
    }

    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/products/${id}`,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });
    if (response.data.status === 200) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? {
                ...product,
                name,
                description,
                highlight,
                stock,
                price,
                photos: response.data.product.photos,
                categoryId,
              }
            : product,
        ),
      );
      setTimeout(() => {
        setResponseUpdateProduct(null);
        setResponseCategories(null);
        setShow((prev) => !prev);
      }, 1000);
      return setResponseUpdateProduct(200);
    }
    if (response.data.status === 400) {
      return setResponseUpdateProduct(400);
    }
  };

  const handleImage = (event) => {
    const images = event.target.files;
    setPhotos(Array.from(images));
  };

  const removePhoto = async (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);

    await axios({
      method: "PUT",
      url: `${import.meta.env.VITE_API_URL}/products/img/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { index },
    });

    setPhotos(updatedPhotos);
    setPhotoGallery(updatedPhotos);
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
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="controlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={`${!name && responseUpdateProduct === 401 && "is-invalid"}`}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required={true}
                value={description}
                className={`${!description && responseUpdateProduct === 401 && "is-invalid"}`}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="text"
                    required={true}
                    value={stock}
                    className={`${!stock && responseUpdateProduct === 401 && "is-invalid"}`}
                    onChange={(event) => setStock(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="controlInput4">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    required={true}
                    value={price}
                    className={`${!price && responseUpdateProduct === 401 && "is-invalid"}`}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="ControlInput8">
              <Form.Label>Photos</Form.Label>
              <div>
                {photoGallery &&
                  photoGallery.map((photo, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
                        alt={`Photo ${index + 1}`}
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <button
                        className="btn btn-primary"
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-5px",
                          width: "20px",
                          height: "20px",
                          padding: "0",
                          fontSize: "12px",
                        }}
                        onClick={() => removePhoto(index)}
                        type="button"
                      >
                        x
                      </button>
                    </div>
                  ))}
              </div>
              <Form.Control type="file" onChange={(event) => handleImage(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlInput7">
              <Form.Label>Highlight</Form.Label>
              <Form.Check
                type="checkbox"
                required={true}
                checked={highlight === "1"}
                className={`${!highlight && responseUpdateProduct === 401 && "is-invalid"}`}
                onChange={(event) => setHighlight(event.target.checked ? "1" : "0")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput5">
              <Form.Label>Category Id</Form.Label>
              <Form.Select
                required={true}
                value={categoryId}
                className={`${!categoryId && responseUpdateProduct === 401 && "is-invalid"}`}
                onChange={(event) => setCategoryId(event.target.value)}
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
          {responseUpdateProduct ? (
            responseUpdateProduct === 200 ? (
              <span style={{ fontSize: "0.9rem", color: "green" }}>
                Product Updated successfully!!
              </span>
            ) : responseUpdateProduct === 401 ? (
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
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
