"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/productContext/productContext";
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

          <p>{product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width={100}
            height={250}
          />
          <button className="btn btn-primary btn-lg" role="button">
            {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
            Köp
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
