"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/productContext/productContext";
//KOLLA OM DET GÅR ATT GÖRA PÅ ANNAT SÄTT...?FÖR ATT RENDERA UT PRODUCT MED ID PÅ SPECIFIK SIDA
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
