import React, { useContext, useState } from "react";
import ProductContext from "../state/ProductContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

function ProductDetail() {
  const { products, addProduct, removeProduct, updateProduct } =
    useContext(ProductContext);

  const navigate = useNavigate();

  const idparam = useParams().id;

  const product = products.filter((el) => el.id == idparam)[0];

  const [id, setId] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);

  const handleClose = () => navigate(`/`);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("image is ", image);
    updateProduct(id, name, price, description, image);
    navigate(`/`);
  };

  return (
    <>
      <h1>Product Detail </h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formBasicName">
          <Form.Label column sm={2}>
            name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="input"
              placeholder="Enter name"
              defaultValue={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPrice">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="input"
              placeholder="price"
              defaultValue={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicdescription">
          <Form.Label column sm={2}>
            description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="input"
              placeholder="Enter description"
              defaultValue={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formFile">
          <Form.Label column sm={2}>
            image
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
            <img src={image} />
          </Col>
        </Form.Group>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{ marginLeft: "5px" }}
        >
          Save Changes
        </Button>
      </Form>
    </>
  );
}

export default ProductDetail;
