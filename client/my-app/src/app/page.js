"use client";
import React from "react";
import Carousel from "../../src/app/components/Carousel/Carousel";
import LoginForm from "../../src/app/components/LoginForm/LoginForm";
import Categories from "../../src/app/components/Categories/Categories";
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

export default function Home() {
  return (
    <ProductProvider>
      <CustomerProvider>
        <main>
          <Carousel />
          <LoginForm />
          <Categories />
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
  );
}
