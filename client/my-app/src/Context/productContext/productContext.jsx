"use client";
import { useState, createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setAllProducts] = useState([]);
  const [product, setProduct] = useState();

  const getAllProducts = async () => {
    try {
      const res = await fetch(`http://localhost:3080/api/products`);
      const products = await res.json();

      setAllProducts(products);
    } catch (error) {
      console.log("Kan inte hämta alla produkter tyvärr.....", error);
    }
  };

  // const getProductsByCategory = async (categoryTitle) => {
  //   try {
  //     console.log(
  //       `Fetchar produkter från produktcontext med categoriId:${categoryTitle}`
  //     );
  //     const res = await fetch(
  //       `http://localhost:3080/api/products/categories/${encodeURIComponent(
  //         categoryTitle
  //       )}`
  //     );
  //     const productCategories = await res.json();
  //     console.log("ProductsmedKategoriContext:", productCategories);

  //     setAllCategories(productCategories);
  //     console.log(productCategories);
  //   } catch (error) {
  //     console.log("Kan inte hämta alla produkter tyvärr.....", error);
  //   }
  // };

  const getProductsById = async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:3080/api/products/${encodeURIComponent(productId)}`
      );
      const product = await res.json();
      console.log("ProductsmedIdContext:", product);

      setProduct(product);

      console.log(product);
      return product;
    } catch (error) {
      console.log("Kan inte hämta produkten med ID", error);
    }
  };
  const getProductById = async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:3080/api/products/${productId}`
      );
      const product = await res.json();
      console.log("ProductsmedIdContext:", product);

      setProduct(product);

      console.log(product);
      return product;
    } catch (error) {
      console.log("Kan inte hämta produkten med ID", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,

        getProductsById,
        getProductById,

        products,
        product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
