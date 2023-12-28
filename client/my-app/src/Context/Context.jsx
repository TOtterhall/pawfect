import { useState, createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch(`http://localhost:3080/api/products/`);
    const products = await res.json();
    setAllProducts(products);
  };

  // ... andra funktioner och useEffect

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        products,
        // ... andra värden/funktioner du vill tillhandahålla
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
