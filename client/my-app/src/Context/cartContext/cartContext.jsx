"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, updatedCartQuantity] = useState(0);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cart);
    updatedCartQuantity(cart);
  }, []);

  const addToCart = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingCartItemIndex !== -1) {
      setCartItems((prevItems) => {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex].quantity += quantity;

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        updatedCartQuantity(updatedCartItems);

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
        updatedCartQuantity(updatedCartItems);

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
        inCart,
        // andra värden/funktioner
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
