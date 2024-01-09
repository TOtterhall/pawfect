import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import Categories from "../Categories/Categories";
import News from "../News/News";
import Shop from "../Shop/Shop";
import Aboutus from "../Aboutus/Aboutus";
import Info from "../Info/Info";
import Newsletter from "../Newsletter/Newsletter";
const Main = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Categories />
      <News />
      <Shop />
      <Aboutus />
      <Info />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
