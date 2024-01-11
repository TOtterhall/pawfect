"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductProvider from "../../Context/productContext/productContext";
import CustomerProvider from "../../Context/customerContext/customerContext";

export default function Store() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <main>
          <div>Min butik</div>
          <Shop />
        </main>
      </CustomerProvider>
    </ProductProvider>
  );
}
