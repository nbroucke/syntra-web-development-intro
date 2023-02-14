import React from "react";
import { useState, useEffect } from "react";
import DbService from "../DbService";

const ProductContext = React.createContext();
export default ProductContext;

export function ProductProvider({ children }) {
  const db = new DbService();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //fetch products
    db.getAll().then((res) => setProducts(res));
  }, []);

  const addProduct = (name, price, description, image) => {
    const id = Math.max(...products.map((o) => o.id)) + 1;
    console.log("adding product", id, name, price, description);
    db.add(id, name, price, description);
    setProducts([...products, { id, name, price, description }]);
  };
  const removeProduct = (id) => {
    setProducts(products.filter((el) => el.id != id));
    db.del(id);
  };

  const updateProduct = (id, name, price, description, image) => {
    console.log("image to update ", image);
    const rest = products.filter((el) => el.id != id);
    const newArray = [...rest, { id, name, price, description, image }];
    db.upd(id, name, price, description, image);
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
