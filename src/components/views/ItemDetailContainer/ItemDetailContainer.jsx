import React, { useState, useEffect } from "react";
import ItemDetail from "./components/ItemDetail";

export const ItemDetailContainer = (props) => {
  // Array con relojes
  const smartwatches = [
    {
      id: 1,
      title: "Smartwatch Samsung 1",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-samsung-1.png",
      alt: "Smartwatch Samsung 1",
    },
  ];

  // Promise
  const promiseItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Si está todo ok se muestra el resolve
        resolve(smartwatches);
      }, 2000);
    });
  };

  // Hook useState
  const [detailToShow, setDetailToShow] = useState([]);

  // Hook useEffect (cada vez que se ejecuta este componente)
  useEffect(() => {
    promiseItem().then((smartwatches) => {
      setDetailToShow(smartwatches);
    });
  }, []);

  return (
    <div className="main">
      <ItemDetail detailToShow={detailToShow} />
    </div>
  );
};

export default ItemDetailContainer;
