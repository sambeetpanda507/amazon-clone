const cardData = [
  {
    _id: Math.random(),
    cardTitle: "Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver)",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/61w8zR6LbJL._SL1500_.jpg",
    mrp: 25990.0,
    price: 21499.0,
    youSave: "₹ 4,491.00 (17%)",
    star: 4,
  },
  {
    _id: Math.random(),
    cardTitle: "Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver) ",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/81RYDgA32ML._SL1500_.jpg",
    mrp: 35490.0,
    price: 30499.0,
    youSave: "₹ 4,991.00 (14%)",
    star: 4.5,
  },
  {
    _id: Math.random(),
    cardTitle: "Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver) ",
    cardImg:
      "https://images-na.ssl-images-amazon.com/images/I/71sDAeFafVL._SL1500_.jpg",
    mrp: 39490.0,
    price: 34499.0,
    youSave: "₹ 4,991.00 (14%)",
    star: 3.5,
  },
];

// const sum = [
//   { id: 1, price: 10 },
//   { id: 2, price: 20 },
//   { id: 3, price: 30 },
// ];

console.log(
  cardData.reduce((accumulator, value) => accumulator + value.price, 0)
);
