import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido a Mi Tienda</h1>
            <p className="hero-subtitle">
              Descubre productos increíbles con diseño moderno y calidad
              excepcional
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="btn btn-primary">
                Ver Productos
              </Link>
              <Link to="/acerca" className="btn btn-secondary">
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Entrega Rápida</h3>
              <p>Recibe tus productos en tiempo récord</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Calidad Premium</h3>
              <p>Solo los mejores productos seleccionados</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Garantía Total</h3>
              <p>Compra con confianza y seguridad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
