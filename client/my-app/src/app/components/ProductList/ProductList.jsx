"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/Context"; // Uppdatera sökvägen här om det behövs
import Image from "next/image";
const ProductList = () => {
  const { products, getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Image
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
