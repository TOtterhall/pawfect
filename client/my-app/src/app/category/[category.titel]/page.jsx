"use client";
import React from "react";
import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory";
import ProductProvider from "../../../Context/productContext/productContext";
import CustomerProvider from "../../../Context/customerContext/customerContext";
import CategoryProvider from "../../../Context/categoryContext/categoryContext";

export default function ProductListByCategory() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CustomerProvider>
          <main>
            <h1>Min butik</h1>
            <h1>Mina produkter baserade på kategorier:</h1>
            <ProductsByCategory />
          </main>
        </CustomerProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}
