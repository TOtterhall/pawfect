"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/productContext/productContext";
const ProductList = () => {
  const { products, getAllProducts } = useProductContext();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>

          <p>{product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width={100}
            height={250}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
