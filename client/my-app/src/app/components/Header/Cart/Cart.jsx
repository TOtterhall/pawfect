"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import BtnGoToCheckout from "../../Buttons/GoToCheckout";

export default function Cart() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [isDrawerOpen]);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {" "}
      {/* Btn to open Drawer */}
      <button
        className="btn btn-outline-dark my-2 my-sm-0"
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      {/* Drawer */}
      {isDrawerOpen && cart.length > 0 && (
        <div className="cart-container">
          <div className="cartDrawer">
            <button
              className="btn btn-outline-dark position-absolute top-0 end-0 "
              onClick={closeDrawer}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {/* Content Cart in Drawer IF Drawer is open*/}

            <h4 className="modal-header">DIN VARUKORG</h4>

            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {cart.map((cartItem) => (
                    <div className="mb-3" key={cartItem.product._id}>
                      <div className="card mb-3">
                        <img
                          src={cartItem.product.image}
                          alt={cartItem.product.title}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {cartItem.product.title}
                          </h5>
                          <p className="card-text">
                            Price: {cartItem.product.price}sek
                          </p>
                          <p className="card-text">
                            Quantity: {cartItem.quantity}st
                          </p>
                          <button
                            className="btn btn btn-outline-dark my-2 my-sm-0 btn-lg"
                            onClick={() => removeFromCart(cartItem.product._id)}
                          >
                            TA BORT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cart-bottom">
            <p className="card-text">Totalt:{calculateTotal}sek</p>
            <BtnGoToCheckout onCloseDrawer={closeDrawer} />
            <br />
            <br />
          </div>
        </div>
      )}
    </>
  );
}
