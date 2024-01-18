"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../../Cart/Cart";
import Menu from "../Menu/Menu";
import Categories from "../../Categories/Categories";
import CategoryContextProvider from "@/Context/categoryContext/categoryContext";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <CategoryContextProvider>
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a className="navbar-brand" href="/">
            Home
          </a> */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li>
                <div>
                  <Menu />
                </div>
                <button
                  className="btn btn-outline-success my-2 my-sm-0 "
                  onClick={openDrawer}
                >
                  open
                </button>
                {isDrawerOpen && (
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div>
                          <button
                            className="btn btn-outline-success my-2 my-sm-0 "
                            onClick={closeDrawer}
                          >
                            X
                          </button>
                          <div>
                            <p>BUTIK</p>
                            <p></p>
                            <ul>
                              <li>
                                <Categories />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div>
            <SearchForm />
          </div>
          <div>
            <Logo />
          </div>
          <div>
            <Login />
          </div>
          <div>
            <Cart />
          </div>
        </nav>
      </div>
    </CategoryContextProvider>
  );
}
