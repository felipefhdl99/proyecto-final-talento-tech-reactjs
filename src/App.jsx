import Productos from "./Products";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import About from "./About";
import ProductDetail from "./ProductDetail";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/acerca" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
