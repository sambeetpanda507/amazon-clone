import React from "react";
import "./carousel.css";

function Carousel() {
   return (
      <div className="carousel__div">
         <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
         >
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600_2lo._CB403731832_.jpg"
                     className="d-block w-100 img-fluid"
                     alt="product1"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg"
                     className="d-block w-100 img-fluid"
                     alt="product2"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/HeadsetDays/V250146967_WLA-Headset_Days_TallHero_1500x600._CB403722192_.jpg"
                     alt="product3"
                     className="d-block w-100 img-fluid"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/ATF/U599/Sep/New/2._CB406825212_.jpg"
                     alt="product3"
                     className="d-block w-100 img-fluid"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
                     alt="product3"
                     className="d-block w-100 img-fluid"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                     alt="product3"
                     className="d-block w-100 img-fluid"
                  />
               </div>
            </div>
            <a
               className="carousel-control-prev"
               href="#carouselExampleControls"
               role="button"
               data-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselExampleControls"
               role="button"
               data-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
   );
}

export default Carousel;
