"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, updatedCartQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    updatedCartQuantity(cart);
  }, []);

  const addToCart = (product, quantity) => {
    if (!product || !product._id) {
      console.error("Invalid product or product ID");
      return;
    }

    const existingCartItem = cartItems.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingCartItem !== -1) {
      setCartItems((prevItems) => {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItem].quantity = quantity;

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        const newCartQuantity = updatedCartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        updatedCartQuantity(newCartQuantity);
        console.log("Updated Cart Items:", updatedCartItems);
        console.log("New Cart Quantity:", newCartQuantity);
        return updatedCartItems;
      });
    } else {
      const cartItem = {
        product: product,
        quantity: quantity,
      };

      setCartItems((prevItems) => {
        const updatedCartItems = [...prevItems, cartItem];

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        const newCartQuantity = updatedCartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        updatedCartQuantity(newCartQuantity);
        console.log("Updated Cart Items:", updatedCartItems);
        console.log("New Cart Quantity:", newCartQuantity);
        return updatedCartItems;
      });
    }
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
