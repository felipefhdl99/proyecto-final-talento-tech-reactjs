import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import "./Cart.css";

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <Navbar />
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h2>Tu carrito está vacío</h2>
            <a href="/productos" className="btn btn-primary">
              Ver Productos
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <Navbar />
      <div className="cart-content">
        <div className="cart-header">
          <h1 className="cart-title">Mi Carrito</h1>
          <p className="cart-subtitle">
            {getTotalItems()} {getTotalItems() === 1 ? "producto" : "productos"}{" "}
            en tu carrito
          </p>
        </div>

        <div className="cart-main">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.productImage} alt={item.productName} />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.productName}</h3>
                  <p className="cart-item-description">
                    {item.productDescription}
                  </p>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-price">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Resumen del Pedido</h3>

              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="summary-line">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>

              <div className="summary-line total-line">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceder al Pago</button>

              <button className="clear-cart-btn" onClick={clearCart}>
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
