"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../../Context/productContext/productContext";
import "./ProductCard.css";

import { useRouter } from "next/navigation";
const ProductCard = () => {
  const { products, getAllProducts, getProductsById } = useProductContext();
  const router = useRouter();
  useEffect(() => {
    getAllProducts();
  }, []);
  const handleProductClick = async (productId) => {
    try {
      console.log("Product ID clicked:", productId);

      await getProductsById(productId);

      router.push(`/product/${productId}`);
    } catch (error) {
      console.error("Ett fel uppstod vid hantering av produktklick:", error);
    }
  };

  //MAP THRUE ALL MY PRODUCTS AND RENDER PRODUCTCARD FOR EACH ONE
  return (
    <div className="container d-flex">
      {products.map((product) => (
        <div
          key={product._id}
          onClick={() => handleProductClick(product._id)}
          className="card card mx-2 mb-4 col-md-3 col-sm-6 justify-content-center"
          style={{ width: "16rem" }}
        >
          <img
            className="card-img-top"
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
