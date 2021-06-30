import React, { useState } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [aggregateItem, setAggregateItem] = useState([]);

  const addItem = (smartwatch) => {
    setAggregateItem([...aggregateItem, smartwatch]);
    setCount(count + 1);

    console.log("Carrito actualizado", { aggregateItem });
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        aggregateItem,
        setAggregateItem,
        addItem,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
