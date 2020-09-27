import React from "react";
import Header from "../header/Header";
import Cards from "../Cards";

const cardData = [
  {
    _id: Math.random(),
    cardTitle: "LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/71sgMM9ZQ9L._SY606_.jpg",
    mrp: 32990,
    price: 28990,
    youSave: "₹ 4000.00 (12%) ",
    count: 1,
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "IFB 6.5 Kg Fully-Automatic Front Loading",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/81WnWcQNSLL._SL1500_.jpg",
    mrp: 35490.0,
    price: 30499.0,
    youSave: "₹ 4,991.00 (14%)",
    count: 1,
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "Bosch 7 kg Fully-Automatic Front Loading",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/61JkCI7uuYL._SY606_.jpg",
    mrp: 35250.0,
    price: 28490.0,
    youSave: "₹ 6760.00 (19%)",
    count: 1,
    star: 4.5,
  },
];

function WashingMachines() {
  return (
    <div className="dishwasher">
      <Header />
      <div className="container my-4">
        <div className="row">
          <Cards cardData={cardData} />
        </div>
      </div>
    </div>
  );
}

export default WashingMachines;
