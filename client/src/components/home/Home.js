import React from "react";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Product from "../products/Product";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
