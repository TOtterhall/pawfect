import { useState, createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/products`);
      const products = await res.json();

      setAllProducts(products);
    } catch (error) {
      console.log("Kan inte hämta alla produkter tyvärr.....", error);
    }
  };

  // andra funktioner och useEffect

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        products,
        // andra värden/funktioner
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
