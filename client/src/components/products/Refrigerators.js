import React from "react";
import Header from "../header/Header";
import Cards from "../Cards";

const cardData = [
  {
    _id: Math.random(),
    cardTitle: "LG 215 L 4 Star Inverter Direct Cool Single Door Refrigerator",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/61pkHR5vYPL._SL1500_.jpg",
    mrp: 20990,
    price: 18380,
    youSave: "₹ 2,610.00 (12%)",
    count: 1,
    star: 4.5,
  },
  {
    _id: Math.random(),
    cardTitle: "Haier 565 L Inverter Frost-Free Side-By-Side Refrigerator",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/815PMvtmzjL._SL1500_.jpg",
    mrp: 105000,
    price: 52390,
    youSave: "₹ 52,610.00 (50%) ",
    count: 1,
    star: 4.5,
  },
  {
    _id: Math.random(),
    cardTitle: "Haier 181 L 2 Star Direct-Cool Single Door Refrigerator",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/71mlSspS7OL._SL1500_.jpg",
    mrp: 13400,
    price: 9990,
    youSave: "₹ 3,410.00 (25%)",
    count: 1,
    star: 4,
  },
];

function Refrigerators() {
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

export default Refrigerators;
