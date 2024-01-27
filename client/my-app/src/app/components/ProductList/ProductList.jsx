"use client";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProductContext } from "@/Context/productContext/productContext";
const ProductList = () => {
  const { getAllProducts, product } = useProductContext();
  useEffect(() => {
    getAllProducts();
  });
  //Render all my productcards here
  return (
    <main>
      <div className="container">
        <div className="cardgroup">
          <div className="nav-link mx-2">
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
