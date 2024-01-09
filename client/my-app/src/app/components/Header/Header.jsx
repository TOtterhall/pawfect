`use client`;
import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchForm from "./SearchForm/SearchForm";

export default function Header() {
  return (
    <div>
      <h1>MyHeader</h1>
      <p>Min navbar nedanför</p>
      <Navbar />
      <SearchForm />
      <h3>Logo</h3>
      <h3>Login</h3>
      <h3>Cart</h3>
    </div>
  );
}
