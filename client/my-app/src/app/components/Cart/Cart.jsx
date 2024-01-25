"use client";

//skapa cards som lägger sig i kassan och inkludera + && - för att kunna ändra i varukorgen
//Lägga till knapp för att fortsätta shoppa...
//cart ska automatiskt uppdatera sig...???utan att behöva uppdatera sidan.
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import BtnGoToCheckout from "../Buttons/GoToCheckout";
import { useCartContext } from "@/Context/cartContext/cartContext";
export default function Cart() {
  const { cart } = useCartContext();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // const [cart, setCart] = useState([]);
  console.log(cart);
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")));
  // }, [isDrawerOpen]);
  useEffect(() => {
    console.log(cart);
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  //Kalkylera vad summan blir beroende på antal produkter
  //Kalkylera vad summan blir pris * quantfity = total
  const calculateTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* ändra färg på knapp sedan */}
      <button
        className="btn btn-outline-success my-2 my-sm-0 "
        onClick={() => openDrawer()}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      {/* Drawer */}
      {isDrawerOpen && cart.length > 0 && (
        <div>
          <h4>DIN VARUKORG</h4>

          <div>slide som åker här med text om säker betalning</div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="p-2 g-col-6">
                  {" "}
                  <ul>
                    {cart.map((cartItem) => (
                      <li className="p-2 g-col-6" key={cartItem.product._id}>
                        <p>{cartItem.product.title}</p>
                        <p>{cartItem.product.price}</p>
                        <p>Quantity: {cartItem.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p>Totalt:{calculateTotal}</p>
          <BtnGoToCheckout />
          <p>Du kanske gillar detta också?</p>
          <p>Images???</p>
          <button
            className="btn btn-outline-success my-2 my-sm-0 "
            onClick={closeDrawer}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </>
  );
}
