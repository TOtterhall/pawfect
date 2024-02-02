"use client";
import { useState, createContext, useContext } from "react";

export const CategoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export const CategoryContextProvider = ({ children }) => {
  const [categories, setAllcategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/categories`);
      const categories = await res.json();

      setAllcategories(categories);
    } catch (error) {
      error;
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        getAllCategories,
        categories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
