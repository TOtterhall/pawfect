"use client";
import React, { useState } from "react";
import { useCartContext } from "../../../Context/cartContext/cartContext";
const BtnAddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  return (
    <div>
      <div className="quantity-selector rounded-start">
        <button
          className="quantity-button btn btn-outline-dark my-2 my-sm-0 btn-lg"
          onClick={decrement}
        >
          -
        </button>

        <input
          className="form-label"
          type="text"
          value={quantity}
          readOnly
          style={{ width: "100px", height: "42px", textAlign: "center" }}
        />
        <button
          className="quantity-button btn btn-outline-dark my-2 my-sm-0 btn-lg"
          onClick={increment}
        >
          +
        </button>
      </div>
      <br />
      <br />
      <button
        className="btn btn btn-outline-dark my-2 my-sm-0 btn-lg"
        role="button"
        onClick={() => handleAddToCart()}
      >
        Köp
      </button>
    </div>
  );
};

export default BtnAddToCart;
