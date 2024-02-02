"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./productByCategory.css";
import Link from "next/link";
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
      <br />
      <br />
      <h1 className="text-center">{categoryTitle}</h1>
      <br />
      <br />
      <div className="container d-flex">
        <br />
        <br />
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <div
              key={product._id}
              className="card card mx-2 mb-4 col-md-3 col-sm-6 justify-content-center"
              style={{ width: "16rem" }}
            >
              <Image
                className="card-img-top"
                src={product.image}
                alt={product.title}
                width={100}
                height={250}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hundhalsband;
