import React, { useState, useEffect } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [aggregateItems, setAggregateItems] = useState([]);

  const addItem = (smartwatch) => {
    // Usamos el spread operator y le sumamos lo que recibe por parámetro (smartwatch)
    setAggregateItems([...aggregateItems, smartwatch]);
    setCount(count + 1);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        aggregateItems,
        setAggregateItems,
        addItem,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
