import { useOrderContext } from "@/Context/orderContext/orderContext.jsx";
import React from "react";

export default function Orderconfirm() {
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
