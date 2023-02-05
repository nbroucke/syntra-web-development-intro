import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { ProductProvider } from "./state/ProductContext";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
