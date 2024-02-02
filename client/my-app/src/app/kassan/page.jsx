"use client";
import React from "react";
import CheckOutBtn from "../components/Buttons/CheckOutBtn";
import Link from "next/link";

import { useCartContext } from "@/Context/cartContext/cartContext";
import { useCustomerContext } from "@/Context/customerContext/customerContext";
import LoginForm from "../components/Header/Login/LoginForm/LoginForm";

export default function checkout() {
  const { cart } = useCartContext();
  const { auth } = useCustomerContext();

  return (
    <div className="mb-5">
      <h1 className="my-5  text-center">KASSAN</h1>

      <div className="container">
        <div className="row">
          <Link
            className="p-2 btn btn-outline-dark my-2 my-sm-0 btn-lg "
            href="/butik"
          >
            FORTSÄTT SHOPPA
          </Link>
          <Link
            className="p-2 btn btn-outline-dark my-2 my-sm-0 btn-lg "
            href="/minaordrar"
          >
            SE MINA ORDRAR
          </Link>

          {cart.map((cartItem) => (
            <div
              className="col-xs-12 col-md-6 col-lg-2 my-5"
              key={cartItem.product._id}
            >
              <div className="card mb-6">
                <img
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{cartItem.product.title}</h5>
                  <p className="card-text">
                    Price: {cartItem.product.price} SEK
                  </p>
                  <p className="card-text">Quantity: {cartItem.quantity} ST</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>{auth ? <CheckOutBtn /> : <LoginForm />}</div>
      </div>
    </div>
  );
}
