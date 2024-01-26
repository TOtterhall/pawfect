"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderContextProvider = ({ children }) => {
  const [allorders, setAllOrders] = useState([]);
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

  //   const clearSuccessOrder = () => {
  //     setSuccessOrder(null);
  //   };

  return (
    <OrderContext.Provider
      value={{
        getAllOrders,
        allorders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
