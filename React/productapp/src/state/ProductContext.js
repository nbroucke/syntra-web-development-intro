import React from "react";
import { useState } from "react";
const Products = [
  {
    id: 0,
    name: "Product 0",
    price: 100,
    description: "Dit is product 0",
  },
  {
    id: 1,
    name: "Product 1",
    price: 101,
    description: "Dit is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 102,
    description: "Dit is product 2",
  },
];

const ProductContext = React.createContext();
export default ProductContext;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(Products);

  const addProduct = (id, name, price, description) => {
    Products.push({ id, name, price, description });
    setProducts(Products);
  };
  const removeProduct = (id) => {
    setProducts(products.filter((el) => el.id != id));
  };
  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
