import React from "react";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";

export default function Navbar() {
  return (
    <div>
      <Menu />
      <h1>PAWFECT</h1>
      <SearchForm />
      <h3>login</h3>
      <h3>cart</h3>
    </div>
  );
}
