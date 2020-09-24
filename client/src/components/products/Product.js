import React from "react";
import "./product.css";
import HomeProductCards from "./HomeProductCards";
import Donation from "./Donation";
import HomeEssentials from "./HomeEssentials";
import Laptop from "./Laptop";
import TodaysDeal from "./TodaysDeal";
import HomeFurnishing from "./HomeFurnishing";
import HomeWorking from "./HomeWorking";

function Product() {
  return (
    <>
      <div className="product pl-5 pr-5 mb-2">
        <div className="row">
          <HomeProductCards />
          <Donation />
          <HomeEssentials />
          <Laptop />
          <TodaysDeal />
          <HomeFurnishing />
          <HomeWorking />
        </div>
      </div>
    </>
  );
}

export default Product;
