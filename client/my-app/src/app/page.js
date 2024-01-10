"use client";
import React from "react";
import Content from "./components/Content/Content";

import ProductProvider from "../Context/productContext/productContext";
import CustomerProvider from "../Context/customerContext/customerContext";

export default function Home() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <div>
          <main>
            <Content />
          </main>
        </div>
      </CustomerProvider>
    </ProductProvider>
  );
}
