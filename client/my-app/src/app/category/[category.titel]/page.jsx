// "use client";
// import React from "react";
// import { useState } from "react";
// import Store from "../../butik/page";
// import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory";
// import ProductProvider from "../../../Context/productContext/productContext";
// import CustomerProvider from "../../../Context/customerContext/customerContext";
// import CategoryProvider from "../../../Context/categoryContext/categoryContext";
// import Shop from "../../components/Shop/Shop";
// import Link from "next/link";
// export default function ProductListByCategory() {
//   // const [selectedCategory, setSelectedCategory] = useState(null);
//   // const handleCategoryChange = (category) => {
//   //   setSelectedCategory(category);
//   // };
//   return (
//     <CategoryProvider>
//       <ProductProvider>
//         <CustomerProvider>
//           <div>
//             <h1>Min butik</h1>
//             <h1>Mina produkter baserade på kategorier:</h1>
//             <ProductsByCategory />
//             {/* <Store
//               selectedCategory={selectedCategory}
//               onCategoryChange={handleCategoryChange}
//             /> */}
//             {/* <Link
//               className="nav-link"
//               href="/products/[productTitle]"
//               as={`/products/${encodeURIComponent(products.title)}`}
//             >
//               <ProductsByCategory products={products.title} />
//             </Link> */}
//           </div>
//         </CustomerProvider>
//       </ProductProvider>
//     </CategoryProvider>
//   );
// }
