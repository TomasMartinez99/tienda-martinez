import React, { useState, useEffect } from "react";
import ItemDetail from "./dummy/ItemDetail";

export const ItemDetailContainer = (props) => {
  // Objeto
  const smartwatch1 = {
    id: 1,
    title: "Smartwatch Samsung 1",
    price: 25000,
    pictureUrl: "./img/relojes/reloj-samsung-1.png",
    alt: "Smartwatch Samsung 1",
  };

  // Promise
  const promiseItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Si está todo ok se muestra el resolve
        resolve(smartwatch1);
      }, 2000);
    });
  };

  // Hook useEffect (cada vez que se ejecuta este componente)
  useEffect(() => {
    promiseItem().then(smartwatch1);
  }, []);

  return (
    <div className="main">
      <ItemDetail {...smartwatch1} />
    </div>
  );
};

export default ItemDetailContainer;
