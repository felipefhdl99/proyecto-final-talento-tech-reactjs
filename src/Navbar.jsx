import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "./CartContext";
import React from "react";

export default function Navbar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Mi Tienda</div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/carrito" className="cart-link">
              Carrito
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
