"use client";
import React from "react";
import Shop from "../components/Shop/Shop";
import ProductProvider from "../../Context/productContext/productContext";
import CustomerProvider from "../../Context/customerContext/customerContext";
import CategoryProvider from "../../Context/categoryContext/categoryContext";
import Categories from "../components/Categories/Categories";

export default function Store() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CustomerProvider>
          <main>
            <h1>Min butik</h1>
            <h1>Mina kategoerier från shop:</h1>
            <Categories />
            <h1>Mina produkter:</h1>
            <div>Länka även från startsidan</div>
          </main>
          <h1>Min butik</h1>
          <h1>Mina kategoerier från shop:</h1>
          <Categories />
          <h1>Mina produkter:</h1>
          <div>Länka även från startsidan</div>
          <Shop />
        </CustomerProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}
