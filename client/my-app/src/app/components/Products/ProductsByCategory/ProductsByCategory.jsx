// //När jag uppdaterar sidan så hittas inte produkten???
// // "use client";
// // import React, { useState } from "react";
// // import BtnAddToCart from "../../components/Buttons/AddToCart";
// // import { useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { useProductContext } from "../../../Context/productContext/productContext";
// // import CustomerProvider from "../../../Context/customerContext/customerContext";
// // import CategoryProvider from "../../../Context/categoryContext/categoryContext";

// // export default function ProductListByTitle() {
// //   const router = useRouter();
// //   const productId = router.query?._id || null;
// //   console.log(productId);
// //   const { getProductsById } = useProductContext();
// //   const [product, setProduct] = useState();

// //   useEffect(() => {
// //     if (productId) {
// //       getProductsById(productId).then((result) => {
// //         console.log("Result from getProductsById:", result);
// //         setProduct(result);
// //       });
// //     }
// //   }, [productId, getProductsById]);

// //   return (
// //     <CategoryProvider>
// //       <CustomerProvider>
// //         <div>
// //           <h1>Detaljsida för produkter</h1>

// //           {product ? (
// //             <div>
// //               <h2>{product.title}</h2>
// //               <p>{product.description}</p>
// //               <h2>{product.colors}</h2>
// //               <h2>{product.sizes}</h2>
// //               <h2>{product.categories}</h2>
// //               <p>{product.price}</p>
// //               <BtnAddToCart product={product} />
// //               <img
// //                 src={product.image}
// //                 alt={product.title}
// //                 width={100}
// //                 height={250}
// //               />
// //             </div>
// //           ) : (
// //             <p>
// //               Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A
// //               SIDA...?
// //             </p>
// //           )}
// //         </div>
// //       </CustomerProvider>
// //     </CategoryProvider>
// //   );
// // }

// //När jag uppdaterar sidan så hittas inte produkten???Usestate samma som härromdagen skicka produkt....
// "use client";
// import React, { useState } from "react";

// import { useEffect } from "react";
// // import { useRouter } from "next/navigation";
// import { useProductContext } from "../../../../Context/productContext/productContext";

// //När jag uppdaterar sidan så hittas inte produkten???
// //KRÄVS STYLING && KOLLA IGENOM?
// export default function ProductListByTitle() {
//   // const { product, getProductById, getAllProducts } = useProductContext();
//   const { products, getProductsByCategory, getAllProducts } =
//     useProductContext();
//   useEffect(() => {
//     if (getAllProducts) {
//       getProductsByCategory();
//     }
//   }, [products]);
//   // useEffect(() => {
//   //   if (product && product._id) {
//   //     getProductById(product._id).then((productId) => {
//   //       console.log("Result from getProductsById:", productId);
//   //       console.log(productId);
//   //     });
//   //   }
//   // }, []);
//   return (
//     <div>
//       <h1>Detaljsida för produkter</h1>
//       {products ? (
//         <div>
//           {products.map((product) => (
//             <div
//               key={product._id}
//               onClick={() => handleProductClick(product._id)}
//               className="card"
//               style={{ width: "16rem" }}
//             >
//               <img
//                 className="card-img-top"
//                 src={product.image}
//                 alt={product.title}
//                 width={100}
//                 height={250}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>
//           Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A SIDA...?
//         </p>
//       )}
//     </div>
//   );
// }
