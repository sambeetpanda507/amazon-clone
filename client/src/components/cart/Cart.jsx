import React, { useContext } from "react";
import Header from "../header/Header";
import { CartContext } from "../../CartContext";
const Cart = () => {
  const value = useContext(CartContext);
  console.log(value);
  return (
    <div className="cart">
      <Header></Header>
    </div>
  );
};

export default Cart;
