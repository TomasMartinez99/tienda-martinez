import React, { useState } from "react";

// Array para almacenar los productos agregados
export const CartContext = React.createContext([]);

// CartComponentProvider es el proveedor de nuestro CartContext
export const CartComponentProvider = ({ children }) => {
  // Cantidad de los productos agregados
  const [quantity, setQuantity] = useState(0);
  const [aggregateItems, setAggregateItems] = useState([]);

  const addItem = (smartwatch, itemCount) => {
    const smartwatchId = smartwatch.itemToShow.id;
    const dupAggregateItems = [...aggregateItems];

    // Buscamos si coincide el id del item a agregar con los que tenemos agregados
    const found = dupAggregateItems.find((element) => {
      return element.smartwatch.itemToShow.id === smartwatchId;
    });

    // Condición para saber si el item está agregado
    if (found) {
      alert("Item duplicado");

      const sum = found.itemCount;
      found.itemCount = sum + itemCount;

      setAggregateItems(dupAggregateItems);
      setQuantity(quantity + itemCount);
    } else {
      setAggregateItems([...aggregateItems, { smartwatch, itemCount }]);
      setQuantity(quantity + itemCount);
    }
  };

  const clear = () => {
    setAggregateItems([]);
    setQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        aggregateItems,
        setAggregateItems,
        addItem,
        quantity,
        setQuantity,
        clear,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
