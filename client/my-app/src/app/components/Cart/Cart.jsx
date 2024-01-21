"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../../Context/cartContext/cartContext";
export default function Cart() {
  const { inCart } = useCartContext();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
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
                    {inCart.map((item) => (
                      <li className="p-2 g-col-6" key={item.product._id}>
                        <p>{item.product.title}</p>
                        <p>Quantity: {item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
