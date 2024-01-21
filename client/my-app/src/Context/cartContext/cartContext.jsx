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
    const existingCartItem = cartItems.findIndex(
      (item) => item.product._id === product._id
    );
    if (existingCartItem !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItem].quantity += quantity;
      setCartItems(updatedCartItems, () => {
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        updateCartQuantity(updatedCartItems);
      });
    } else {
      const cartItem = {
        product: product,
        quantity: quantity,
      };
      setCartItems((prevItems) => [...prevItems, cartItem]);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartQuantity(cartItems);
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
        inCart,
        // andra värden/funktioner
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
