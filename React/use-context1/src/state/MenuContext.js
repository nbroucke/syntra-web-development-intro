import React from "react";
import { useState } from "react";

const MenuContext = React.createContext();
export default MenuContext;

export function MenuProvider({ children }) {
  const [status, setStatus] = useState("open");
  const toggleStatus = () => {
    if (status === "open") {
      setStatus("closed");
    } else {
      setStatus("open");
    }
  };
  return (
    <MenuContext.Provider value={{ status, toggleStatus }}>
      {children}
    </MenuContext.Provider>
  );
}
