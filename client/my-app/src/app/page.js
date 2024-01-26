"use client";
import React from "react";
import Carousel from "../../src/app/components/Carousel/Carousel";

import LoginForm from "../../src/app/components/LoginForm/LoginForm";

import News from "../../src/app/components/News/News";
import Aboutus from "../../src/app/components/Aboutus/Aboutus";
import Info from "../../src/app/components/Info/Info";
import Newsletter from "../../src/app/components/Newsletter/Newsletter";
import StoreJumbo from "../../src/app/components/Jumbotrons/StoreJumbo";
import AboutJumbo from "../../src/app/components/Jumbotrons/AboutJumbo";
import InfoJumbo from "../../src/app/components/Jumbotrons/InfoJumobo";
import SocialJumbo from "../../src/app/components/Jumbotrons/SocialJumbo";
import ProductProvider from "../Context/productContext/productContext";
import CustomerProvider from "../Context/customerContext/customerContext";
import CategoryProvider from "../Context/categoryContext/categoryContext";
import CartProvider from "../Context/cartContext/cartContext";
export default function Home() {
  return (
    <CartProvider>
      <CategoryProvider>
        <ProductProvider>
          <CustomerProvider>
            <main>
              <Carousel />
              <LoginForm />
              {/* //förstår inte om jag lägger in min
          /<Login/> 
          här så får jag ut iconerna.
          Researcha oom detta samtidigt som bilder.
          har det med config att göra? */}

              <News />
              <StoreJumbo />
              <AboutJumbo />
              <InfoJumbo />
              <SocialJumbo />
              <Aboutus />
              <Info />
              <Newsletter />
            </main>
          </CustomerProvider>
        </ProductProvider>
      </CategoryProvider>
    </CartProvider>
  );
}
