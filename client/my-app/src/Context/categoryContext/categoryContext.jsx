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
      console.log("Kan inte hämta alla kategorier tyvärr.....", error);
    }
  };

  // andra funktioner och useEffect

  return (
    <CategoryContext.Provider
      value={{
        getAllCategories,
        categories,
        // andra värden/funktioner
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
