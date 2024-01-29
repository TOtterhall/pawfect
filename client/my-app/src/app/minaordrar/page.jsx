"use client";
import React from "react";
import { useEffect, useState } from "react";
import LoginForm from "../components/Header/Login/LoginForm/LoginForm";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
// import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";

export default function OrderList() {
  const { auth } = useCustomerContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const allCustomerOrders = async () => {
      const customerId = auth.customerId;
      try {
        const response = await fetch(
          `http://localhost:3080/api/orders/${customerId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const orderData = await response.json();
          setOrders(orderData);
          console.log(orderData);
        } else {
          console.error(
            "Fel vid hämtning av ordrar från ordersidan...:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Fel vid hämtning av ordrar från Ordersidan:", error);
      }
    };

    allCustomerOrders(auth.customerId);
  }, [auth.costomerId]);

  return (
    <div>
      <div>Mina ordrar</div>
      <LoginForm />
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Order id: {order._id}kr</li>
        ))}
      </ul>
    </div>
  );
}
