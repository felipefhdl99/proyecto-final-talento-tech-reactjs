import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useCart } from "./CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://68fe9d2e7c700772bb141e9b.mockapi.io/api/v1/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show confirmation or redirect
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <Navbar />
        <div className="loading-message">Cargando producto...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-container">
        <Navbar />
        <div className="error-container">
          <h2>❌ {error || "Producto no encontrado"}</h2>
          <button onClick={() => navigate("/productos")} className="btn-back">
            ← Volver a Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Navbar />

      <div className="product-detail-content">
        <button onClick={() => navigate("/productos")} className="btn-back">
          ← Volver a Productos
        </button>

        <div className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.productImage} alt={product.productName} />
          </div>

          <div className="product-detail-info">
            <h1 className="product-detail-title">{product.productName}</h1>

            <div className="product-detail-price">${product.price}</div>

            <div className="product-detail-section">
              <h3>Descripción</h3>
              <p>{product.productDescription}</p>
            </div>

            {product.department && (
              <div className="product-detail-section">
                <h3>Departamento</h3>
                <p>{product.department}</p>
              </div>
            )}

            {product.productMaterial && (
              <div className="product-detail-section">
                <h3>Material</h3>
                <p>{product.productMaterial}</p>
              </div>
            )}

            {product.productAdjective && (
              <div className="product-detail-section">
                <h3>Características</h3>
                <p>{product.productAdjective}</p>
              </div>
            )}

            <div className="product-detail-actions">
              <button
                className="btn-add-to-cart-large"
                onClick={handleAddToCart}
              >
                Agregar al Carrito
              </button>

              <button
                className="btn-buy-now"
                onClick={() => {
                  addToCart(product);
                  navigate("/carrito");
                }}
              >
                Comprar Ahora
              </button>
            </div>

            {product.createdAt && (
              <div className="product-detail-meta">
                <small>
                  Agregado: {new Date(product.createdAt).toLocaleDateString()}
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
