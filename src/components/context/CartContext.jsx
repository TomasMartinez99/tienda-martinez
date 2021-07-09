import React, { useState } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [aggregateItems, setAggregateItems] = useState([]);

  const addItem = (smartwatch, itemCount) => {
    const smartwatchId = smartwatch.itemToShow.id;
    const arr = smartwatch.itemToShow;

    const found = arr.find((element) => element === smartwatchId);
    console.log(arr);

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
