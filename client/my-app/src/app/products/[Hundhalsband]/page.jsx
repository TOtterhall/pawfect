"use client";
import React, { useEffect, useState } from "react";

const Hundhalsband = () => {
  const categoryTitle = "Hundhalsband";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const res = await fetch(
          `http://localhost:3080/api/products/categories/Hundhalsband`
        );
        const products = await res.json();
        setProducts(products);
      } catch (error) {
        console.error("Kan inte hämta produkter i kategorin", error);
      }
    };

    if (categoryTitle) {
      getProductsByCategory();
    }
    if (!categoryTitle) {
      return <p>Loading...</p>;
    }
  }, [categoryTitle]);

  return (
    <div>
      <h1>Produkter i kategorin {categoryTitle}</h1>
      {products.map((product) => (
        <div
          key={product._id}
          onClick={() => handleProductClick(product._id)}
          className="card"
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

export default Hundhalsband;
