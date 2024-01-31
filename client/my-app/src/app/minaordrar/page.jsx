"use client";
import React from "react";
import { useEffect, useState } from "react";
import LoginForm from "../components/Header/Login/LoginForm/LoginForm";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";

export default function OrderList() {
  const { auth } = useCustomerContext();
  const { orders, allCustomerOrders } = useOrderContext();
  useEffect(() => {
    allCustomerOrders();
  }, [auth.costomerId]);

  return (
    <div className="container">
      <div>Mina ordrar</div>
      <LoginForm />
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Order nummer: {order.orderNumber}</li>
        ))}
      </ul>
    </div>
  );
}
