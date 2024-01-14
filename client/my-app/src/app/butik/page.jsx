"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductProvider from "../../Context/productContext/productContext";
import CustomerProvider from "../../Context/customerContext/customerContext";

export default function Store() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <h1>Min butik</h1>
        <div>Länka även från startsidan</div>
        <Shop />
      </CustomerProvider>
    </ProductProvider>
  );
}
