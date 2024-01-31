"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductCard from "../components/Products/ProductCard/ProductCard";
import "./butik.css";
export default function Store() {
  return (
    <main>
      <div className="container"></div>
      <h1>Min butik</h1>
      <h1>Alla mina produkter:</h1>
      <ProductCard />
    </main>
  );
}
