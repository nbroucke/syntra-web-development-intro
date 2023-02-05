import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ProductContext from "../state/ProductContext";

import { useNavigate } from "react-router-dom";

function ProductAdd() {
  const { products, addProduct, removeProduct } = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </>
  );
}

export default ProductAdd;
