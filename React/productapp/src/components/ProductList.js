import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../state/ProductContext";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ProductList() {
  const { products, addProduct, removeProduct } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(name, price, description);
    setShow(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <h1>ProductList</h1>

        <Button variant="primary" onClick={handleShow}>
          add product
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="price"
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicdescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                placeholder="Enter description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard
              id={p.id}
              name={p.name}
              price={p.price}
              description={p.description}
              image={p.image}
            ></ProductCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
