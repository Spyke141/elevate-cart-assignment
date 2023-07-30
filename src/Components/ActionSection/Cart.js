import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="cart-btn d-inline-flex">
        <div className="cart-btn">
          <i className="bi bi-cart-dash p-2"></i>
          <button type="button" className="btn cart-text large-screen-only">
            CART
          </button>
        </div>
        <div className="cart-btn">
          <i className="bi bi-person p-2"></i>
          <button type="button" className="btn cart-text large-screen-only">
            CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
