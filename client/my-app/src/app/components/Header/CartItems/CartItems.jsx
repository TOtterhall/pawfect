"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnGoToCheckout from "../../Buttons/GoToCheckout";
import { useCartContext } from "@/Context/cartContext/cartContext";

export default function CartItems() {
  // MED DENNA SÅ TRIGGAS CART VARJE GÅNG JAG TRYCKER PÅ KNAPPEN
  // const [cart, setCart] = useState([]);
  // console.log(cart);
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")));
  // }, []);

  // MED DENNA SÅ MÅSTE JAG MANUELLT UPPDATERA SIDAN?
  const { cart } = useCartContext();
  useEffect(() => {
    console.log(cart);
  }, []);

  //Kalkylera vad summan blir beroende på antal produkter
  //Kalkylera vad summan blir pris * quantfity = total
  const calculateTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <div className="p-2 g-col-6">
        <ul className="card-body mb-3">
          {cart.map((cartItem) => (
            <li className="card-body" key={cartItem.product._id}>
              <p className="card-title">{cartItem.product.title}</p>
              <p className="card-text">{cartItem.product.price}</p>
              <p className="card-text">Quantity: {cartItem.quantity}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>Totalt:{calculateTotal}</p>
        <BtnGoToCheckout />
      </div>
    </>
  );
}
