"use client";
import React from "react";
import Link from "next/link";
import Search from "../SearchForm/Search";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";
export default function Header() {
  return (
    <header className="header">
      <div className="headercontent container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex menu-container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <span>
              <Menu />
            </span>
            <div className="search search-custom-margin">
              <Search />
            </div>
          </nav>
        </div>

        <div className="d-flex logo">
          <Link className="nav-link logo" href="/">
            <Logo />
          </Link>
        </div>

        <div className="d-flex">
          <div className="login">
            <Login />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import SearchForm from "../SearchForm/SearchForm";
// import Logo from "../Logo/Logo";
// import Login from "../Login/Login";
// import Cart from "../Cart/Cart";
// import Menu from "../Menu/Menu";
// export default function Navbar() {
//   return (
//     <div className="container d-flex justify-content-between align-items-center fixed-top">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="navbar-nav mr-auto mt-2 mt-lg-0">
//           <Menu />
//           {/* <SearchForm /> */}
//         </div>

//         <Link className="nav-link" href="/">
//           <Logo />
//         </Link>

//         <div>
//           <div>
//             <Login />
//             <Cart />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
