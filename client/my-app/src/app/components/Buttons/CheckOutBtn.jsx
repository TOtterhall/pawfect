"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCartContext } from "@/Context/cartContext/cartContext";
import { useCustomerContext } from "@/Context/customerContext/customerContext";

const stripePromise = loadStripe(
  `pk_test_51ObgWZB4OKIOfmBbp4HuOGz818qIcEtz5AQkd11AIsY7HPqZPR96QacXX6auyEqYhW2q9NPNZrT0395oTkrBx94h00U0G27s4y`
);
const CheckOutBtn = async () => {
  const { cart } = useCartContext();
  const { auth } = useCustomerContext();
  const handleCheckOut = async () => {
    const response = await fetch(
      "http://localhost:3080/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json ",
        },

        body: JSON.stringify({
          cart,
          customer: auth.customer._id,
        }),
      }
    );
    if (!response.ok) {
      return;
    }

    const { url } = await response.json();
    window.location = url;
  };
};
return (
  <div>
    <button
      className="btn btn-primary btn-lg"
      role="button"
      onClick={handleCheckOut}
    >
      Gå till Kassan
    </button>
  </div>
);

export default CheckOutBtn;
//Att testa
//Skapa en confirm sida...skickas dit vid lyckat köp!
//Om inloggad ska man kunna se alla sina ordrar/beställningar under "minasidor" - hämta
//Knapp till kassan
//Sida för kassan där kunden ska kunna ändra i sin beställning
//shipping-method?
//STÄDA UPP/KOLLA URLER:ER
//DESIGNA FRONTEND =)
//Om admin???!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// "use client";
// import React from "react";
// // import { useCustomerContext } from "../../../Context/customerContext/customerContext";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   `pk_test_51ObgWZB4OKIOfmBbp4HuOGz818qIcEtz5AQkd11AIsY7HPqZPR96QacXX6auyEqYhW2q9NPNZrT0395oTkrBx94h00U0G27s4y`
// );

// const CheckOutBtn = () => {
//   const handleCheckOut = async () => {
//     const response = await fetch(
//       "http://localhost:3080/create-checkout-session",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({}),
//       }
//     );
//     if (!response.ok) {
//       return;
//     }

//     const { url } = await response.json();
//     window.location = url;
//   };

//   return (
//     <div>
//       <button
//         className="btn btn-primary btn-lg"
//         role="button"
//         onClick={handleCheckOut}
//       >
//         Gå till Kassan
//       </button>
//     </div>
//   );
// };

// export default CheckOutBtn;
