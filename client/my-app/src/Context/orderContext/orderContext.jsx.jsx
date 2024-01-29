"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { useCartContext } from "../cartContext/cartContext";
import { useCustomerContext } from "../customerContext/customerContext";

export const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const { auth } = useCustomerContext();
  const { cart } = useCartContext();

  const createOrder = async () => {
    try {
      console.log(auth);
      console.log(cart);
      const res = await fetch("http://localhost:3080/api/orders/createorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer: auth.customerId, cart: cart }),
      });

      console.log(res);

      if (res.ok) {
        const orderData = await res.json();

        console.log("Ny Order registrerad");
        setOrder(orderData);
        localStorage.removeItem("cart");
      } else {
        console.log("Kan inte registrera din order, fel tassavtryck");
      }
    } catch (error) {
      console.error("Kan inte skapa en order åt DIG.....", error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
