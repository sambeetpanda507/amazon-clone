import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [count, setCount] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const updateCount = (countData) => {
    setCount(countData);
  };

  const addCartItems = (items) => {
    setCartItems([...cartItems, items]);
  };

  return (
    <CartContext.Provider
      value={{
        count: count,
        updateCount: updateCount,
        cartItems: cartItems,
        addCartItems: addCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
