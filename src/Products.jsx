import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Products.css";
import Navbar from "./Navbar";
import React from "react";

// class Producto {
//   constructor(id, productName, product, productDescription, department, productMaterial, productAdjective, price, createdAt) {
//     this.id = id;
//     this.price = price;
//     this.createdAt = createdAt;
//     this.product = product;
//     this.productName = productName;
//     this.productDescription = productDescription;
//     this.department = department;
//     this.productMaterial = productMaterial;
//     this.productAdjective = productAdjective;
//   }
// }

export default function Productos() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://68fe9d2e7c700772bb141e9b.mockapi.io/api/v1/products"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="products-container">
        <Navbar />
        <div className="loading-message">Cargando productos...</div>
      </div>
    );

  if (error)
    return (
      <div className="products-container">
        <Navbar />
        <div className="error-message">
          Error al cargar productos: {error.message}
        </div>
      </div>
    );

  return (
    <div className="products-container">
      <Navbar />
      <div className="products-header">
        <h1 className="products-title">Nuestros Productos</h1>
        <p className="products-subtitle">
          Descubre nuestra increíble colección de productos cuidadosamente
          seleccionados para ti
        </p>
      </div>
      <ul className="product-list">
        {data.map((product) => (
          <li className="product-item" key={product.id}>
            <div className="product-image">
              <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="product-name">{product.productName}</div>
            <div className="product-description">
              {product.productDescription}
            </div>
            <div className="product-price">${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
