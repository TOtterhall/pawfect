"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../../Cart/Cart";
import Menu from "../Menu/Menu";

import CategoryProvider from "../../../../Context/categoryContext/categoryContext";
import CartProvider from "../../../../Context/cartContext/cartContext";
import CustomerProvider from "../../../../Context/customerContext/customerContext";
import { useCartContext } from "../../../../Context/cartContext/cartContext";
export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // const { cartItems, cartQuantity } = useCartContext([]);
  // const [cart, setCart] = useState({ items: [], quantity: 0 });

  // useEffect(() => {
  //   console.log(cartItems);
  //   console.log(cartQuantity);
  //   setCart({ items: cartItems, quantity: cartQuantity });
  // }, [cartItems, cartQuantity]);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <CustomerProvider>
      <CartProvider>
        <CategoryProvider>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div>
                {/* <a classNameName="navbar-brand" href="/">
            Home
          </a> */}
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li>
                    <div>
                      <Menu />
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <SearchForm />
              </div>
              <div>
                <Link className="nav-link" href="/">
                  <Logo />
                </Link>
              </div>
              <div>
                <Login />
              </div>
              <div>
                <Cart />
              </div>
            </nav>
          </div>
        </CategoryProvider>
      </CartProvider>
    </CustomerProvider>
  );
}
