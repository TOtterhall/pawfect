"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/productContext/productContext";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";

const ProductsByCategory = () => {
  const { categories, getAllCategories } = useCategoryContext();
  const { products, getProductsByCategory } = useProductContext();
  // useEffect(() => {
  //   console.log("Categories från useEffectEtt:", categories);
  //   getAllCategories();
  // }, []);
  useEffect(() => {
    getAllCategories();
    if (categories.title === products.category) {
      getProductsByCategory();
    }
  }, [products]);
  // useEffect(() => {
  //   console.log("Categories:", categories);
  //   if (categories.length > 0) {
  //     getProductsByCategory(categories[0].title);
  //   }
  // }, [categories, getProductsByCategory]);

  // console.log("Products från useEffect:", products);
  // useEffect(() => {
  //   getAllCategories();
  // }, [categories.title]);
  // console.log(categories.title);
  // useEffect(() => {
  //   getProductsByCategory();
  // }, [products]);
  // console.log(products);

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

export default ProductsByCategory;
