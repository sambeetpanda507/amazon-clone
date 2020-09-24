import React from "react";
import Header from "../header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../Cards";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const cardData = [
  {
    _id: Math.random(),
    cardTitle: "Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver)",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/61w8zR6LbJL._SL1500_.jpg",
    mrp: "₹ 25,990.00",
    price: "₹ 21,499.00",
    youSave: "₹ 4,491.00 (17%)",
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver) ",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/81RYDgA32ML._SL1500_.jpg",
    mrp: "₹ 35,490.00",
    price: "₹ 30,499.00",
    youSave: "₹ 4,991.00 (14%)",
    star: 4.5,
  },
  {
    _id: Math.random(),
    cardTitle: "Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver) ",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/71sDAeFafVL._SL1500_.jpg",
    mrp: "₹ 39,490.00",
    price: "₹ 34,499.00",
    youSave: "₹ 4,991.00 (14%)",
    star: 3.5,
  },
];

function Dishwashwer() {
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

export default Dishwashwer;
