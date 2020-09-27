import React from "react";
import Header from "../header/Header";
import Cards from "../Cards";

const cardData = [
  {
    _id: Math.random(),
    cardTitle: "LG 80 cm (32 inches) HD Smart LED TV",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/81WF9kxcNrL._SL1500_.jpg",
    mrp: 21990,
    price: 14990,
    youSave: "₹ 7,000.00 (32%) ",
    count: 1,
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "Samsung 80 cm (32 Inches) HD LED TV",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/81N7bMl70HL._SL1500_.jpg",
    mrp: 14900,
    price: 12490,
    youSave: "₹ 2,410.00 (16%)",
    count: 1,
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "Sony Bravia 80 cm (32 inches) HD LED TV",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/71IgrNZUhPL._SL1500_.jpg",
    mrp: 19990,
    price: 16990,
    youSave: "₹ 3,000.00 (15%) ",
    count: 1,
    star: 4.5,
  },
];

function Televisions() {
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

export default Televisions;
