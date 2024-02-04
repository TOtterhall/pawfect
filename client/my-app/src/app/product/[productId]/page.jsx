"use client";
import React, { useEffect } from "react";
import BtnAddToCart from "../../components/Buttons/AddToCart";
import { useProductContext } from "../../../Context/productContext/productContext";
import Image from "next/image";

export default function ProductListById() {
  const { product, getProductById, getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (product && product._id) {
      getProductById(product._id).then((productId) => {
        console.log("Result from getProductsById:", productId);
        console.log(productId);
      });
    }
  }, []);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card-img text-center mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={250}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4 className="card-colors">{product.colors}</h4>
              {/* <h2>{product.sizes}</h2> */}
              <p>{product.categories}</p>
              <h4>{product.price} SEK</h4>
              <br />

              <br />
              <BtnAddToCart product={product} />
              <br />
              <br />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Hittar ingen produkt med detta ID 404</p>
      )}
    </div>
  );
}
