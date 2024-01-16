"use client";
import React, { useEffect } from "react";
import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
const Categories = () => {
  const { categories, getAllCategories } = useCategoryContext();
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>
          <h2>{category.title}</h2>

          <p>{category.description}</p>

          <button className="btn btn-primary btn-lg" role="button">
            {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
            Köp
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
