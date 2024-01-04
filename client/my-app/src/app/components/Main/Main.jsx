import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductList from "../ProductList/ProductList";
import LoginForm from "../LoginForm/LoginForm";
const Main = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Main;
