import React, { useContext } from "react";
import ProductContext from "../state/ProductContext";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { products } = useContext(ProductContext);

  const idparam = useParams().id;

  const { id, name, price, description } = products.filter(
    (el) => el.id == idparam
  )[0];

  return (
    <div>
      <p>id = {id}</p>
      <p>name = {name}</p>
      <p>price = {price}</p>
      <p>description = {description}</p>
    </div>
  );
}

export default ProductDetail;
