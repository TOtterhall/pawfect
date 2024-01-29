import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";
import React from "react";
// const { order, createOrder } = useOrderContext();

// const handleCheckOut = async () => {
//   try {
//     await createOrder();
export default function Orderconfirm() {
  //skapa useeffect med function i create order
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
