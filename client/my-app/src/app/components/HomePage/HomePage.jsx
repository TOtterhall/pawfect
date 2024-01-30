"use client";
import React from "react";

import Carousel from "./Carousel/Carousel";
import News from "./News/News";
import StoreJumbo from "./Jumbotrons/StoreJumbo";
import AboutJumbo from "./Jumbotrons/AboutJumbo";
import InfoJumbo from "./Jumbotrons/InfoJumobo";
import SocialJumbo from "./Jumbotrons/SocialJumbo";
import Newsletter from "./Newsletter/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Carousel />
      <News />
      <StoreJumbo />
      <AboutJumbo />

      <SocialJumbo />
      <InfoJumbo />
      <Newsletter />
    </main>
  );
}
