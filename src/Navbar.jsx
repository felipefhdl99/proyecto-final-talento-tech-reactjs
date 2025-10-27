import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">✨ Mi Tienda</div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
