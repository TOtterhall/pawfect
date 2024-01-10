import React from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import Categories from "../Categories/Categories";
import News from "../News/News";

import Aboutus from "../Aboutus/Aboutus";
import Info from "../Info/Info";
import Newsletter from "../Newsletter/Newsletter";
import StoreJumbo from "../Jumbotrons/StoreJumbo";
import AboutJumbo from "../Jumbotrons/AboutJumbo";
import InfoJumbo from "../Jumbotrons/InfoJumobo";
import SocialJumbo from "../Jumbotrons/SocialJumbo";
const Main = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Main;
