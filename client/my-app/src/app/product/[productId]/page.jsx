"use client";
import React, { useEffect } from "react";
import BtnAddToCart from "../../components/Buttons/AddToCart";
import { useProductContext } from "../../../Context/productContext/productContext";
import Image from "next/image";

export default function ProductListById() {
  const { product, getProductById, getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (product && product._id) {
      getProductById(product._id).then((productId) => {
        console.log("Result from getProductsById:", productId);
        console.log(productId);
      });
    }
  }, []);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card-img text-center mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={250}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4 className="card-colors">{product.colors}</h4>
              {/* <h2>{product.sizes}</h2> */}
              <p>{product.categories}</p>
              <h4>{product.price} SEK</h4>
              <br />

              <br />
              <BtnAddToCart product={product} />
              <br />
              <br />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">
          Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A SIDA...?
        </p>
      )}
    </div>
  );
}
// import React, { useState } from "react";
// import BtnAddToCart from "../../components/Buttons/AddToCart";
// import { useEffect } from "react";

// import {
//   ProductContext,
//   useProductContext,
// } from "../../../Context/productContext/productContext";
// import "./productId.css";
// //FIxa denna.....!!!!!!!!!!!!!!
// export default function ProductListById() {
//   // const { product, getProductById, getAllProducts } = useProductContext();
//   const { product, getProductById, getAllProducts } = useProductContext();

//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   useEffect(() => {
//     if (product && product._id) {
//       getProductById(product._id).then((productId) => {
//         console.log("Result from getProductsById:", productId);
//         console.log(productId);
//       });
//     }
//   }, []);
//   return (
//     <div>
//       <h1>Detaljsida för produkter</h1>
//       {product ? (
//         <div className="container">
//           <div className="row">
//             <div className="col-4">
//               <div className="card-img">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   width={200}
//                   height={250}
//                 />
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="card-details">
//                 <h2>{product.title}</h2>
//                 <p>{product.description}</p>
//                 <h2 className="card-colors">{product.colors}</h2>
//                 <h2>{product.sizes}</h2>
//                 <h2>{product.categories}</h2>
//                 <p>{product.price}</p>
//                 <BtnAddToCart product={product} />
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>
//           Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A SIDA...?
//         </p>
//       )}
//     </div>
//   );
// }

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
// "use client";
// import React, { useState } from "react";
// import BtnAddToCart from "../../components/Buttons/AddToCart";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ProductContext,
//   useProductContext,
// } from "../../../Context/productContext/productContext";
// import CustomerProvider from "../../../Context/customerContext/customerContext";
// import CategoryProvider from "../../../Context/categoryContext/categoryContext";
// import CartProvider from "../../../Context/cartContext/cartContext";
// import ProductProvider from "../../../Context/productContext/productContext";
// //När jag uppdaterar sidan så hittas inte produkten???
// //KRÄVS STYLING && KOLLA IGENOM?
// export default function ProductListByTitle() {
//   // const { product, getProductById, getAllProducts } = useProductContext();
//   const { product, getProductById } = useProductContext();

//   useEffect(() => {
//     if (product && product._id) {
//       getProductById(product._id).then((productId) => {
//         console.log("Result from getProductsById:", productId);
//         console.log(productId);
//       });
//     }
//   }, []);
//   return (
//     <CategoryProvider>
//       <CustomerProvider>
//         <ProductProvider />
//         <CartProvider />
//         <div>
//           <h1>Detaljsida för produkter</h1>
//           {product ? (
//             <div className="container">
//               <div className="row">
//                 <div className="col-4">
//                   <div className="card-img">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       width={200}
//                       height={250}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div className="card-details">
//                     <h2>{product.title}</h2>
//                     <p>{product.description}</p>
//                     <h2>{product.colors}</h2>
//                     <h2>{product.sizes}</h2>
//                     <h2>{product.categories}</h2>
//                     <p>{product.price}</p>
//                     <BtnAddToCart product={product} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <p>
//               Hittar ingen produkt med detta ID LÄNKA TILL EN ROLIG 404:A
//               SIDA...?
//             </p>
//           )}
//         </div>
//         <CartProvider />
//         <ProductProvider />
//       </CustomerProvider>
//     </CategoryProvider>
//   );
// }
