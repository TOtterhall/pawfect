"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
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
  );
}
