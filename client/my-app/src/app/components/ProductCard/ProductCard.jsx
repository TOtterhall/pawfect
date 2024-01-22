"use client";
import React, { useEffect } from "react";
import BtnAddToCart from "../Buttons/AddToCart";
import { useProductContext } from "../../../Context/productContext/productContext";
import Link from "next/link";

import { useRouter } from "next/navigation";
const ProductCard = () => {
  const { products, getAllProducts } = useProductContext();
  const router = useRouter();
  useEffect(() => {
    getAllProducts();
  }, []);
  const handleProductClick = (productId) => {
    console.log("Product ID clicked:", productId);
    router.push(`/product/${productId}`);
  };
  return (
    <div>
      {products.map((product) => (
        <div key={product._id} onClick={() => handleProductClick(product._id)}>
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
      ))}
    </div>
  );
};

export default ProductCard;

{
  /* <Link className="nav-link" href="/product/[productId]">
Mer om produkten:
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
  </div>
))}
</Link>
</div> */
}
