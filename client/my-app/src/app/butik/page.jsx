"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductCard from "../components/Products/ProductCard/ProductCard";
import "./butik.css";
export default function Store() {
  return (
    <main>
      <div className="container">
        <ProductCard />
      </div>
    </main>
  );
}
