"use client";
import { useEffect } from "react";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
import { useCartContext } from "@/Context/cartContext/cartContext.jsx";
import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";

export default function Orderconfirm() {
  const { auth } = useCustomerContext();
  const { cart } = useCartContext();
  const { createOrder } = useOrderContext();

  useEffect(() => {
    if (auth && cart != []) createOrder();
  }, [cart, auth]);
  // skapa useeffect med function i create order
  return (
    <div>
      <h1>WOW- DITT KÖP LYCKADES</h1>
      <h2>ORDERBEKRÄFTELSE</h2>
      <h3>Fortsätt handla- länka?</h3>

      {/* <ul>
        {allorders.map((order) => (
          <li key={order._id}>{order.customer}</li>
        ))}
      </ul> */}
    </div>
  );
}
