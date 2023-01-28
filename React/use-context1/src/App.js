import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuProvider } from "./state/MenuContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import { ThemeProvider } from "./state/ThemeContext";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
