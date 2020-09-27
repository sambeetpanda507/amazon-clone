import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  // const [count, setCount] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  // const updateCount = (countData) => {
  //   setCount(countData);
  // };

  const addCartItems = (items) => {
    setCartItems([...cartItems, items]);
  };

  const removeCart = (id) => {
    const product = cartItems.filter((items) => {
      return Number(items._id) !== Number(id);
    });
    setCartItems(product);
  };

  const incCount = (id) => {
    console.log("inc count called");
    const product = cartItems.filter((items) => {
      return Number(items._id) === Number(id);
    });
    console.log(product);
    product[0].count += 1;
    // product[0].price *= product[0].count;
  };

  const decCount = (id) => {
    console.log("dec count called");
    const product = cartItems.filter((items) => {
      return Number(items._id) === Number(id);
    });
    console.log(product);
    if (product[0].count <= 0) {
      // window.prompt("Do you want to remove this item from cart?");
      return removeCart(id);
    }
    product[0].count -= 1;
    // product[0].price *= product[0].count;
  };

  return (
    <CartContext.Provider
      value={{
        // count: count,
        // updateCount: updateCount,
        cartItems: cartItems,
        addCartItems: addCartItems,
        removeCart: removeCart,
        incCount: incCount,
        decCount: decCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
