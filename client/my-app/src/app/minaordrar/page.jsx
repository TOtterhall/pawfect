"use client";
import React from "react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Login from "../components/Header/Login/Login";
import LoginForm from "../components/LoginForm/LoginForm";
import { useCustomerContext } from "@/Context/customerContext/customerContext";

const stripePromise = loadStripe(
  `pk_test_51ObgWZB4OKIOfmBbp4HuOGz818qIcEtz5AQkd11AIsY7HPqZPR96QacXX6auyEqYhW2q9NPNZrT0395oTkrBx94h00U0G27s4y`
);
export default function OrderList() {
  const { auth } = useCustomerContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const AllOrders = async () => {
      try {
        const stripe = await stripePromise;
        const response = await fetch("/stripe/order/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ customerId: auth.customerId }),
        });

        if (response.ok) {
          const ordersData = await response.json();
          setOrders(ordersData);
        } else {
          console.error(
            "Fel vid hämtning av ordrar från Stripe:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Fel vid hämtning av ordrar från Stripe:", error);
      }
    };

    AllOrders(auth.customerId);
  }, []);

  return (
    <div>
      <div>Mina ordrar</div>
      <LoginForm />
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order id: {order.id},Belopp:{order.amount / 100}kr
          </li>
        ))}
      </ul>
    </div>
  );
}
