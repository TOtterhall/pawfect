"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderContextProvider = ({ children }) => {
  const [orders, setAllOrders] = useState([]);
  const [orderData, setOrder] = useState([]);
  //   const [successOrder, setSuccessOrder] = useState(null);
  useEffect(() => {
    getAllOrders();
  }, []);
  const getAllOrders = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/orders`);
      const orders = await res.json();
      console.log(orders);
      setAllOrders(orders);
    } catch (error) {
      console.log("Kan inte hämta alla produkter tyvärr.....", error);
    }
  };
  useEffect(() => {
    createOrder();
  });
  const createOrder = async ({ customer }) => {
    const order = { customer: customer._id };
    console.log(order);
    try {
      const res = await fetch("http://localhost:3080/api/orders/placeorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      console.log(res);

      if (res.ok) {
        const orderData = await res.json();

        console.log("Ny kund Order registrerad");
        setOrder(orderData);
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
        getAllOrders,
        orders,
        createOrder,
        orderData,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
