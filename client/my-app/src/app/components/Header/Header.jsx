`use client`;
import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div>
      <h1>MyHeader</h1>
      <p>Min navbar nedanför</p>
      <Navbar />
      <h3>Search</h3>
      <h3>Logo</h3>
      <h3>Login</h3>
      <h3>Cart</h3>
    </div>
  );
}
