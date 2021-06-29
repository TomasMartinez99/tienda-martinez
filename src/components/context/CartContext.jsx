import React, { useState } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [aggregateItem, setAggregateItem] = useState([]);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        aggregateItem,
        setAggregateItem,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
