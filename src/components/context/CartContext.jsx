import React, { useState, useEffect } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [aggregateItems, setAggregateItems] = useState([]);

  const addItem = (smartwatch, itemCount) => {
    // Usamos el spread operator y le sumamos lo que recibe por parámetro (smartwatch)
    setAggregateItems([...aggregateItems, { smartwatch, itemCount }]);
    setQuantity(quantity + itemCount);
  };

  return (
    <CartContext.Provider
      value={{
        aggregateItems,
        setAggregateItems,
        addItem,
        quantity,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
