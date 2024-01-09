`use client`;
import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchForm from "./SearchForm/SearchForm";

export default function Header() {
  return (
    <div>
      <p>Min navbar nedanför</p>
      <Navbar />
    </div>
  );
}
