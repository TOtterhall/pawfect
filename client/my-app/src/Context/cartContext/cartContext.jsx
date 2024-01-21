"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cart);
    updateCartQuantity(cart);
  }, []);
  const addToCart = (product, quantity) => {
    const cartItem = {
      product: product,
      quantity: quantity,
    };
    setCartItems((prevItems) => [...prevItems, cartItem]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, cartItem]));
    updateCartQuantity([...cartItems, cartItem]);
  };
  const updateCartQuantity = (cart) => {
    const totalQuantity = cart.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(totalQuantity);
  };
  // andra funktioner och useEffect

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        cartQuantity,
        // andra värden/funktioner
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
