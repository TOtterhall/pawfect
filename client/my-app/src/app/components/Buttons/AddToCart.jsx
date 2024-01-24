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
    if (addToCart) {
      console.log("if add to cart");
    }
    console.log(product);
    console.log(quantity);
    console.log("Du har klickat på knappen add to cart");
  };
  return (
    <div>
      <div className="quantity-selector rounded-start">
        <button className="quantity-button" onClick={decrement}>
          -
        </button>
        <input type="text" value={quantity} readOnly />
        <button className="quantity-button" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn-primary btn-lg"
        role="button"
        onClick={() => handleAddToCart(quantity)}
      >
        Köp
      </button>
    </div>
  );
};

export default BtnAddToCart;
