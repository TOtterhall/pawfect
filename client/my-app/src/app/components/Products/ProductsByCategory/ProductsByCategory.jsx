"use client";
import React, { useEffect } from "react";
import { useProductContext } from "../../../../Context/productContext/productContext";
const ProductsByCategory = ({ categoryTitle }) => {
  const { products, getAllProducts } = useProductContext();
  useEffect(() => {
    getAllProducts();
  }, []);
  // const ProductsByCategory = ({ categoryTitle }) => {
  //   const { products } = useProductContext();
  //   console.log("Selected Category:", categoryTitle);
  //   const filteredProducts = products.filter((product) =>
  //     product.categories.includes(categoryTitle)
  //   );
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <h2>{product.category}</h2>

          <p>{product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width={100}
            height={250}
          />
          <button className="btn btn-primary btn-lg" role="button">
            {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
            Köp
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategory;

// "use client";
// import React, { useEffect } from "react";
// import { useProductContext } from "../../../Context/productContext/productContext";
// import { useRouter } from "next/navigation";
// import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
// const ProductsByCategory = () => {
//   const { productCategory, getProductsByCategory } = useProductContext();
//   const { categories, getAllCategories } = useCategoryContext();
//   const router = useRouter();
//   useEffect(() => {

//     console.log(categories);
//     console.log("useRouter:", router);
//     const categoryTitle = productCategory.category;
//     console.log(categoryTitle);
//   });
//   // useEffect(() => {
//   //   console.log("useRouter:", router);
//   //   const categoryTitle = productCategory.category;
//   //   console.log(categoryTitle);
//   //   try {
//   //     console.log(categoryTitle);
//   //     if (typeof categoryTitle === "string") {
//   //       const productCategoryTitle =
//   //         productCategory.length > 0 ? productCategory[0].title : "";
//   //       if (categoryTitle !== productCategoryTitle) {
//   //         getProductsByCategory(categoryTitle);
//   //       }
//   //     }
//   //     // if (categoryTitle) {
//   //     //   console.log(categories);

//   //     //   getProductsByCategory(productCategory);
//   //     //   // console.log("categoryTitle:", categoryTitle);
//   //     //   // console.log(categories);
//   //     //   // console.log(getAllCategories);
//   //     //   // console.log(productCategory);
//   //     //   // console.log(getProductsByCategory);
//   //     // }
//   //   } catch (error) {
//   //     console.error("error i kategorititle");
//   //   }
//   // }, [router.query, categories, getProductsByCategory]);
//   // useEffect(() => {
//   //   console.log("router:", router);
//   //   console.log("router.query:", router.query);

//   //   console.log("categoryTitle:", categoryTitle);
//   //   console.log(categories);
//   //   console.log(getAllCategories);
//   //   console.log(productCategory);
//   //   console.log(getProductsByCategory);
//   //   const categoryTitle = router.query?.categoryTitle;
//   //   if (categories._id === productCategory.categories._id) {
//   //     const selectedCategory = categories.find(
//   //       (categories) => categories.title === categories._id
//   //     );

//   //     getProductsByCategory(selectedCategory);
//   //     console.log(categoryTitle);
//   //   }
//   // }, [router.query, productCategory]);
//   // useEffect(() => {
//   //   const categoryTitle = router.query || productCategory;
//   //   console.log(categoryTitle);
//   //   if (typeof categoryTitle === String) {
//   //     const productCategoryTitle =
//   //       productCategory.length > 0 ? productCategory[0].title : "";
//   //     if (categoryTitle !== productCategoryTitle) {
//   //       getProductsByCategory(categoryTitle);
//   //     }
//   //   }
//   //   console.log(router.query);
//   // }, [router.query, productCategory]);

//   return (
//     <div>
//       {productCategory.map((product) => (
//         <div key={product._id}>
//           <h2>{product.title}</h2>

//           <button className="btn btn-primary btn-lg" role="button">
//             {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
//             Köp
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsByCategory;

// // "use client";
// // import React from "react";

// // import { useProductContext } from "../../../Context/productContext/productContext";
// // import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
// // const productsByCategory = () => {
// //   const { products, getProductsByCategory } = useProductContext();
// //   useEffect(() => {
// //     getProductsByCategory(products);
// //   }, [products]);

// //   useEffect(() => {
// //     if (categories._id === productCategory.categories._id) {
// //       const selectedCategory = categories.find(
// //         (categories) => categories.title === categories._id
// //       );
// //       console.log(categories);
// //       console.log(productCategory);
// //       if (selectedCategory) {
// //         getProductsByCategory(productCategory);
// //         console.log(productCategory);
// //       }
// //     }
// //   }, [categories, productCategory]);
// //   return (
// //     <div>
// //       <h2>ProductsByCategory här ja</h2>
// //       <div>
// //         {products.map((product) => (
// //           <div key={product._id}>
// //             /<h2>{product.title}</h2>
// //             <h2>{product.category}</h2>
// //             <p>{product.price}</p>
// //             <img
// //               src={product.image}
// //               alt={product.title}
// //               width={100}
// //               height={250}
// //             />
// //             <button className="btn btn-primary btn-lg" role="button">
// //               {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
// //               Köp
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default productsByCategory;
// // "use client";
// // import React, { useEffect } from "react";
// // import { useProductContext } from "../../../Context/productContext/productContext";
// // import { useCategoryContext } from "../../../Context/categoryContext/categoryContext";
// // const categoryByCategory = () => {
// //   const { getAllCategories } = useCategoryContext();
// //   const { productCategory, getProductsByCategory } = useProductContext();

// //   useEffect(() => {
// //     getAllCategories();
// //   }, []);

// //   useEffect(() => {
// //     getProductsByCategory();
// //   }, []);
// //   useEffect(() => {
// //     if (categories._id === productCategory.categories._id) {
// //       const selectedCategory = categories.find(
// //         (categories) => categories.title === categories._id
// //       );
// //       console.log(categories);
// //       console.log(productCategory);
// //       if (selectedCategory) {
// //         getProductsByCategory(productCategory);
// //         console.log(productCategory);
// //       }
// //     }
// //   }, [categories, productCategory]);
// //   return (
// //     <div>
// //       {productCategory.map((product) => (
// //         <div key={product._id}>
// //           <h2>{product.title}</h2>

// //           <p>{product.price}</p>
// //           <img
// //             src={product.image}
// //             alt={product.title}
// //             width={100}
// //             height={250}
// //           />
// //           <button className="btn btn-primary btn-lg" role="button">
// //             {/* Lägg till komponent "addtocart istället,lägg all logik där" */}
// //             Köp
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default categoryByCategory;
