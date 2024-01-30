"use client";
import React from "react";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";
export default function Header() {
  return (
    <header className="header">
      <div className="headercontent container-fluid d-flex justify-content-between align-items-center fixed-top">
        <div className="d-flex">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span>
              <Menu />
            </span>
          </nav>

          <span>
            <SearchForm />
          </span>
        </div>

        <div className="text-center text-center">
          <Link className="nav-link" href="/">
            <Logo />
          </Link>
        </div>

        <div className="d-flex">
          <div>
            <Login />
          </div>
          <div>
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
