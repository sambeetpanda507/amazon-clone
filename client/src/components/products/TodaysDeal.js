import React from "react";
import Countdown from "react-countdown";

function TodaysDeal() {
  const topDealData = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/51eibVsPieL.__AC_SY200_.jpg",
      price: "₹199.00-₹1,049.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41P5IchdGJL.__AC_SY200_.jpg",
      price: "₹943.00 -₹71,567.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41gDVcJtyjL.__AC_SY200_.jpg",
      price: "₹265.00-₹479.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41x7KLp5JiL.__AC_SY200_.jpg",
      price: "₹319.00-₹3,497.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/51NQ+50fuQL.__AC_SY200_.jpg",
      price: "₹89.00-₹5,199.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41CH41p+K3L.__AC_SY200_.jpg",
      price: "₹143.00-₹1,710.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/418258lqGiL.__AC_SY200_.jpg",
      price: "₹10,000.00-₹29,999.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41VloMir72L.__AC_SY200_.jpg",
      price: "₹284.00-₹521.00",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41Hxk3Dl5RL.__AC_SY200_.jpg",
      price: "₹8,490.00-₹95,490.00",
    },
  ];

  return (
    <div className="todaysdeal">
      <h3 className="pl-4 pt-2">Today's Deals</h3>
      <div className="d-flex align-items-center">
        {topDealData.map((val, index, arr) => {
          return (
            <div key={index} className="text-center p-3">
              <img src={val.imageUrl} className="todaysdeal__img" alt="td1" />
              <p>{val.price}</p>
              <small>
                Ends in <Countdown date={Date.now() + 1000 * 60 * 60 * 5} />
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodaysDeal;
