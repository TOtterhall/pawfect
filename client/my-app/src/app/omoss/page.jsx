"use client";
import ProductsByCategory from "../components/ProductsByCategory/ProductsByCategory";
import ProductProvider from "../../Context/productContext/productContext";
import CustomerProvider from "../../Context/customerContext/customerContext";
import CategoryProvider from "../../Context/categoryContext/categoryContext";
export default function About() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CustomerProvider>
          <main>
            <h1>Om oss</h1>
            <div>Lägg till om oss här</div>
            <div>Länka även från startsidan</div>
            <ProductsByCategory />
          </main>
        </CustomerProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}
