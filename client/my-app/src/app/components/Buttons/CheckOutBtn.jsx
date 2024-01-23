"use client";
import React from "react";
// import { useCustomerContext } from "../../../Context/customerContext/customerContext";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  `pk_test_51ObgWZB4OKIOfmBbp4HuOGz818qIcEtz5AQkd11AIsY7HPqZPR96QacXX6auyEqYhW2q9NPNZrT0395oTkrBx94h00U0G27s4y`
);

const CheckOutBtn = () => {
  const handleCheckOut = async () => {
    const response = await fetch(
      "http://localhost:3080/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    if (!response.ok) {
      return;
    }

    const { url } = await response.json();
    window.location = url;
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
};

export default CheckOutBtn;
