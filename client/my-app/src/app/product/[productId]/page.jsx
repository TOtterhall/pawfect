//När jag uppdaterar sidan så hittas inte produkten???
// "use client";
// import React, { useState } from "react";
// import BtnAddToCart from "../../components/Buttons/AddToCart";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useProductContext } from "../../../Context/productContext/productContext";
// import CustomerProvider from "../../../Context/customerContext/customerContext";
// import CategoryProvider from "../../../Context/categoryContext/categoryContext";

// export default function ProductListByTitle() {
//   const router = useRouter();
//   const productId = router.query?._id || null;
//   console.log(productId);
//   const { getProductsById } = useProductContext();
//   const [product, setProduct] = useState();

//   useEffect(() => {
//     if (productId) {
//       getProductsById(productId).then((result) => {
//         console.log("Result from getProductsById:", result);
//         setProduct(result);
//       });
//     }
//   }, [productId, getProductsById]);

//   return (
//     <CategoryProvider>
//       <CustomerProvider>
//         <div>
//           <h1>Detaljsida för produkter</h1>

//           {product ? (
//             <div>
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <h2>{product.colors}</h2>
//               <h2>{product.sizes}</h2>
//               <h2>{product.categories}</h2>
//               <p>{product.price}</p>
//               <BtnAddToCart product={product} />
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 width={100}
//                 height={250}
//               />
//             </div>
//           ) : (
//             <p>
//               Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A
//               SIDA...?
//             </p>
//           )}
//         </div>
//       </CustomerProvider>
//     </CategoryProvider>
//   );
// }

//När jag uppdaterar sidan så hittas inte produkten???Usestate samma som härromdagen skicka produkt....
"use client";
import React from "react";
import BtnAddToCart from "../../components/Buttons/AddToCart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProductContext } from "../../../Context/productContext/productContext";
import CustomerProvider from "../../../Context/customerContext/customerContext";
import CategoryProvider from "../../../Context/categoryContext/categoryContext";
//När jag uppdaterar sidan så hittas inte produkten???
export default function ProductListByTitle() {
  // const router = useRouter();
  // const productId = router.query?._id || null;
  // console.log(productId);
  const { product, getProductById } = useProductContext();

  // useEffect(() => {
  //   getProductById(product._id).then((productId) => {
  //     console.log("Result from getProductsById:", productId);
  //     console.log(product);
  //   });
  // }, []);
  // useEffect(() => {
  //   // Kontrollera om product._id finns och är definierat innan du anropar getProductById
  //   if (product && product._id) {
  //     getProductById(product._id).then((productId) => {
  //       console.log("Result from getProductsById:", productId);
  //       console.log(product);
  //     });
  //   }
  // }, []);
  useEffect(() => {
    if (product && product._id) {
      getProductById(product._id).then((productId) => {
        console.log("Result from getProductsById:", productId);
        console.log(product);
      });
    }
  }, []);
  return (
    <CategoryProvider>
      <CustomerProvider>
        <div>
          <h1>Detaljsida för produkter</h1>

          {product ? (
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h2>{product.colors}</h2>
              <h2>{product.sizes}</h2>
              <h2>{product.categories}</h2>
              <p>{product.price}</p>
              <BtnAddToCart product={product} />
              <img
                src={product.image}
                alt={product.title}
                width={100}
                height={250}
              />
            </div>
          ) : (
            <p>
              Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A
              SIDA...?
            </p>
          )}
        </div>
      </CustomerProvider>
    </CategoryProvider>
  );
}
