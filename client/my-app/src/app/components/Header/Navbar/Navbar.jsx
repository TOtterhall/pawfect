"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../../Cart/Cart";
import Menu from "../Menu/Menu";
import Categories from "../../Categories/Categories";
export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
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
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/butik">
                Butik
              </Link>
            </li>
            <li>
              <button
                className="btn btn-outline-success my-2 my-sm-0 "
                onClick={openDrawer}
              >
                open
              </button>
              {isDrawerOpen && (
                <div>
                  <div>
                    <p>BUTIK</p>
                    <ul>
                      <li>Kategorierna ska renderas ut i en lista här...</li>
                    </ul>
                  </div>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0 "
                    onClick={closeDrawer}
                  >
                    X
                  </button>
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/omoss">
                Om oss
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/kontakt">
                Kontakta oss
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <Menu />
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
  );
}
