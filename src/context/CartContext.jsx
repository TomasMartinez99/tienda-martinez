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

    // Buscamos si coincide el id del item a agregar con los que tenemos agregados
    const found = aggregateItems.find((element) => {
      return element.smartwatch.itemToShow.id === smartwatchId;
    });

    // Condición para saber si el item está agregado
    if (found) {
      alert("Item duplicado");

      itemCount = itemCount + found.itemCount;
      const DupAggregateItems = aggregateItems.slice();
      const newCarts = DupAggregateItems.map((newCart) => {
        console.log(newCart.smartwatch.itemToShow.id);
        return {
          ...newCart,
          itemCount,
        };
      });
      setAggregateItems(newCarts);

      /* setAggregateItems([...aggregateItems, { smartwatch, itemCount }]); */
      setQuantity(quantity + itemCount);
    } else {
      setAggregateItems([...aggregateItems, { smartwatch, itemCount }]);
      setQuantity(quantity + itemCount);
    }
  };

  return (
    <CartContext.Provider
      value={{
        aggregateItems,
        setAggregateItems,
        addItem,
        quantity,
        setQuantity,
      }}
    >
      {/* Componentes que van a tener acceso */}
      {children}
    </CartContext.Provider>
  );
};
