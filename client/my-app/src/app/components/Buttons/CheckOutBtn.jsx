"use client";
import React from "react";
import { useCustomerContext } from "../../../Context/customerContext/customerContext";
const CheckOutBtn = () => {
  const { isLoggedIn } = useCustomerContext();
  //   const [quantity, setQuantity] = useState(1);

  //   const increment = () => {
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  //   };

  //   const decrement = () => {
  //     if (quantity > 1) {
  //       setQuantity((prevQuantity) => prevQuantity - 1);
  //     }
  //   };
  const handleCheckOut = () => {
    if (isLoggedIn) {
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
