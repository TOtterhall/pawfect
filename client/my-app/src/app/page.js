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
import ProductProvider from "../Context/Context.jsx";

export default function Home() {
  return (
    <ProductProvider>
      <main>
        <Main />
      </main>
    </ProductProvider>
  );
}
