"use client";
import React, { useEffect, useState } from "react";
import BtnAddToCart from "../Buttons/AddToCart";
import { useProductContext } from "../../../Context/productContext/productContext";
import { useCartContext } from "../../../Context/cartContext/cartContext";
const ProductCard = () => {
  const { products, getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h2>{product.colors}</h2>
          <h2>{product.sizes}</h2>
          <h2>{product.categories}</h2>
          <p>{product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width={100}
            height={250}
          />

          <BtnAddToCart product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
