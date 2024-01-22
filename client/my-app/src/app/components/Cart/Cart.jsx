"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../../Context/cartContext/cartContext";
export default function Cart() {
  const { cartItems, totalCost } = useCartContext();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  //Kalkylera vad summan blir beroende på antal produkter
  //Kalkylera vad summan blir pris * quantfity = total
  const calculateTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* ändra färg på knapp sedan */}
      <button
        className="btn btn-outline-success my-2 my-sm-0 "
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      {/* Drawer */}
      {isDrawerOpen && (
        <div>
          <p>MIN Cart</p>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="p-2 g-col-6">
                  {" "}
                  <ul>
                    {cartItems.map((item) => (
                      <li className="p-2 g-col-6" key={item.product._id}>
                        <p>{item.product.title}</p>
                        <p>{item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p>Totalt:{calculateTotal}</p>
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
