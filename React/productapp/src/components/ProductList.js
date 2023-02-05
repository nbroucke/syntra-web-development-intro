import React, { useContext, useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ProductContext from "../state/ProductContext";

import Button from "react-bootstrap/Button";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ProductList() {
  const { products, addProduct, removeProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    console.log();
    setShow(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    const form = event.currentTarget;

    alert("hallo");
    setShow(false);
  };

  return (
    <div>
      <h1>ProductList</h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>description</Form.Label>
              <Form.Control placeholder="Enter description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((p) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                  <p>{p.description}</p> <p>{p.price}$</p>
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <Button
                    onClick={() => {
                      navigate(`/product/${p.id}`);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>

                  <Button
                    onClick={() => {
                      removeProduct(p.id);
                    }}
                  >
                    <FaTrashAlt />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button variant="primary" onClick={handleShow}>
        add product
      </Button>
    </div>
  );
}

export default ProductList;
