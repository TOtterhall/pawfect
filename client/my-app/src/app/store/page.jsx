"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductProvider from "../../Context/productContext/productContext";
import CustomerProvider from "../../Context/customerContext/customerContext";

export default function Store() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <div>Min butik</div>
        <Shop />
      </CustomerProvider>
    </ProductProvider>
  );
}
