import React from "react";
import { useState } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#ffffff",
    color: "light",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "dark",
  },
};

const ThemeContext = React.createContext();
export default ThemeContext;

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (theme.color === "light") {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
    console.log("theme is ", theme.background);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
