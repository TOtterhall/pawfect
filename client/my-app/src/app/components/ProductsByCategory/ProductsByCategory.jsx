"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/productContext/productContext";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
const categoryByCategory = () => {
  const { categories, getAllCategories } = useCategoryContext();
  const { productCategory, getProductsByCategory } = useProductContext();

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getProductsByCategory();
  }, []);
  useEffect(() => {
    if (categories._id === productCategory.categories._id) {
      const selectedCategory = categories.find(
        (categories) => categories.title === categories._id
      );
      console.log(categories);
      console.log(productCategory);
      if (selectedCategory) {
        getProductsByCategory(productCategory);
        console.log(productCategory);
      }
    }
  }, [categories, productCategory]);
  return (
    <div>
      {productCategory.map((product) => (
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

export default categoryByCategory;
