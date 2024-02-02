"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const lsCart = JSON.parse(localStorage.getItem("cart"));
    setCart(lsCart);
    if (!lsCart) {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([]);
    }
  }, []);

  const addToCart = (product, quantity) => {
    if (!product || !product._id) {
      console.error("Invalid product or product ID");
      return;
    }
    const cartItem = {
      product: product,
      quantity: quantity,
    };

    const existingProductIndex = cart.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
