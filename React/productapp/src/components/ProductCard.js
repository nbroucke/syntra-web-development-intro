import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import ProductContext from "../state/ProductContext";

function ProductCard({ id, name, price, description }) {
  const { products, addProduct, removeProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}$</Card.Text>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => {
                navigate(`/product/${id}`);
              }}
            >
              <FaPencilAlt />
            </Button>

            <div style={{ paddingLeft: "2px" }}>
              <Button
                onClick={() => {
                  removeProduct(id);
                }}
              >
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
