// "use client";
// import React from "react";
// import Main from "./components/Main/Main";

// export default function Home() {
//   return (
//     <main>
//       <Main />
//     </main>
//   );
// }

"use client";
import React from "react";
import Main from "./components/Main/Main";
import ProductProvider from "../Context/productContext/productContext";
import CustomerProvider from "../Context/customerContext/customerContext";
export default function Home() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <>
          <Main />
        </>
      </CustomerProvider>
    </ProductProvider>
  );
}
