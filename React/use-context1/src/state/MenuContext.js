import React from "react";
import { useState } from "react";

const MenuContext = React.createContext();
export default MenuContext;

export function MenuProvider({ children }) {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => {
    console.log("setting state to ", !status);
    setStatus(!status);
  };
  return (
    <MenuContext.Provider value={{ status, toggleStatus }}>
      {children}
    </MenuContext.Provider>
  );
}
