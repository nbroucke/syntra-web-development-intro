import React, { useContext } from "react";
import Offcanvas from "./Offcanvas";
import ThemeContext from "../state/ThemeContext";

function H1({ tekst }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.background,
      }}
    >
      <Offcanvas></Offcanvas>
      <h1
        style={{
          color: theme.foreground,
        }}
      >
        {tekst}
      </h1>
    </div>
  );
}
export default H1;
