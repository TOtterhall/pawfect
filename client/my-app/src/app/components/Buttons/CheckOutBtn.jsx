"use client";
import React from "react";
import { useCustomerContext } from "../../../Context/customerContext/customerContext";
const CheckOutBtn = () => {
  const handleCheckOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Inloggad navigera till checkout sidan");
    } else {
      console.log("Loggain/Registerara dig först");
    }
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
