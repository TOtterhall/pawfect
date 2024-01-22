"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProductContext } from "../../../Context/productContext/productContext";
import CustomerProvider from "../../../Context/customerContext/customerContext";
import CategoryProvider from "../../../Context/categoryContext/categoryContext";

export default function ProductListByTitle() {
  const router = useRouter();
  const productId = router.query?._id || null;
  console.log(productId);
  const { product, getProductsById } = useProductContext();

  useEffect(() => {
    if (productId) {
      getProductsById(productId).then((result) => {
        console.log("Result from getProductsById:", result);
      });
    }
  }, [productId]);

  // if (!productId) {
  //   return <p>Produkten hittades inte.</p>;
  // }

  return (
    <CategoryProvider>
      <CustomerProvider>
        <div>
          <h1>Detaljsida för produkter</h1>
          {product ? (
            <div>
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
            </div>
          ) : (
            <p>Hittar ingen produkt med detta ID</p>
          )}
        </div>
      </CustomerProvider>
    </CategoryProvider>
  );
}
