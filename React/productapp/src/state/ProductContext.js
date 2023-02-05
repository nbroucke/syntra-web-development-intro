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
  {
    id: 3,
    name: "Product 3",
    price: 102,
    description: "Dit is product 3",
  },
];

const ProductContext = React.createContext();
export default ProductContext;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(Products);

  const addProduct = (name, price, description) => {
    const id = Math.max(...products.map((o) => o.id)) + 1;
    console.log("adding product", id, name, price, description);
    setProducts([...products, { id, name, price, description }]);
  };
  const removeProduct = (id) => {
    setProducts(products.filter((el) => el.id != id));
  };

  const updateProduct = (id, name, price, description) => {
    const rest = products.filter((el) => el.id != id);
    const newArray = [...rest, { id, name, price, description }];

    setProducts(
      newArray.sort((x, y) => {
        return x.id - y.id;
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
