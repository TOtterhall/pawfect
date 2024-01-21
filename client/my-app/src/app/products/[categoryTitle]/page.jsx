"use client";
import { useRouter } from "next/navigation";
import React from "react";

import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory";
import ProductProvider from "../../../Context/productContext/productContext";
import CustomerProvider from "../../../Context/customerContext/customerContext";
import CategoryProvider from "../../../Context/categoryContext/categoryContext";

export default function ProductListByCategory() {
  const router = useRouter();
  const { query } = router;
  const categoryTitle = query?.categoryTitle || "defaultCategory";
  return (
    <CategoryProvider>
      <ProductProvider>
        <CustomerProvider>
          <div>
            <h1>Min butik</h1>
            <h1>Mina produkter baserade på kategorier:</h1>

            <ProductsByCategory categoryTitle={categoryTitle} />
          </div>
        </CustomerProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}
