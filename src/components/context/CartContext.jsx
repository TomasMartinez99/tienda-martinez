import React, { useState } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// cartProvider es el proveedor de nuestro cartContext
export const CartComponentProvider = ({ children }) => {
  const [aggregate, setAggregate] = useState([]);
  const [count, setCount] = useState([1]);

  return (
    <CartContext.Provider value={[aggregate, setAggregate, count, setCount]}>
      {children}
    </CartContext.Provider>
  );
};
