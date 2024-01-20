"use client";
import React from "react";

import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory";
import ProductProvider from "../../../Context/productContext/productContext";
import CustomerProvider from "../../../Context/customerContext/customerContext";
import CategoryProvider from "../../../Context/categoryContext/categoryContext";

export default function ProductListByCategory() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CustomerProvider>
          <div>
            <h1>Min butik</h1>
            <h1>Mina produkter baserade på kategorier:</h1>

            {/* <Link
              className="nav-link"
              href="/products/[categoryTitle]"
              as={`/products/${encodeURIComponent(products.title)}`}
            >
              <ProductsByCategory products={products.title} />
            </Link> */}
          </div>
        </CustomerProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}

// "use Client";
// import React from "react";
// import ProductList from "../ProductList/ProductList";

// export default function ProductTitle() {
//   return (
//     <div>
//       <div>tets från Shop</div>
//       <ProductList />
//     </div>
//   );
// }
