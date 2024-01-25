"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [cartQuantity, setCartQuantity] = useState(0);
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
    console.log(product);
    console.log(quantity);
    console.log(cart);
    if (!product || !product._id) {
      console.error("Invalid product or product ID");
      return;
    }
    const cartItem = {
      product: product,
      quantity: quantity,
    };
    console.log(cart);
    const existingProductIndex = cart.findIndex(
      (item) => item.product._id === product._id
    );
    console.log(existingProductIndex);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);

    console.log(cart);
  };
  // MIN GAMMLA KOD - SPARA SÅLÄNGE
  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(cartItems);

  //   const newCartQuantity = cart.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );
  //   updatedCartQuantity(newCartQuantity);
  //   setCart({ items: cart, quantity: newCartQuantity });

  // }, []);

  // const addToCart = (product, quantity) => {
  //   if (!product || !product._id) {
  //     console.error("Invalid product or product ID");
  //     return;
  //   }

  //   const existingCartItem = cartItems.findIndex(
  //     (item) => item.product._id === product._id
  //   );

  //   if (existingCartItem !== -1) {
  //     setCartItems((prevItems) => {
  //       const updatedCartItems = [...prevItems];
  //       updatedCartItems[existingCartItem].quantity = quantity;

  //       localStorage.setItem("cart", JSON.stringify(updatedCartItems));

  //       const newCartQuantity = updatedCartItems.reduce(
  //         (total, item) => total + item.quantity,
  //         0
  //       );
  //       updatedCartQuantity(newCartQuantity);
  //       console.log("Uppdaterade:", updatedCartItems);
  //       console.log("NY Quantity:", newCartQuantity);
  //       return updatedCartItems;
  //     });
  //   } else {
  //     const cartItem = {
  //       product: product,
  //       quantity: quantity,
  //     };

  //     setCartItems((prevItems) => {
  //       const updatedCartItems = [...prevItems, cartItem];

  //       localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  //       const newCartQuantity = updatedCartItems.reduce(
  //         (total, item) => total + item.quantity,
  //         0
  //       );
  //       updatedCartQuantity(newCartQuantity);
  //       console.log("Upddaterade Items:", updatedCartItems);
  //       console.log("NY! Quantity:", newCartQuantity);
  //       return updatedCartItems;
  //     });
  //   }
  // };
  // andra funktioner och useEffect

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        // andra värden/funktioner
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
