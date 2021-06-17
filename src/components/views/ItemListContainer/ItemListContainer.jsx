import React, { useState, useEffect } from "react";
import ItemList from "./dummy/ItemList";

export const ItemListContainer = (props) => {
  // Array con relojes
  const smartwatches = [
    {
      id: 1,
      title: "Smartwatch Samsung 1",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-samsung-1.png",
      alt: "Smartwatch Samsung 1",
    },
    {
      id: 2,
      title: "Smartwatch Samsung 2",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-samsung-2.png",
      alt: "Smartwatch Samsung 2",
    },
    {
      id: 3,
      title: "Smartwatch Apple watch 1",
      price: 25000,
      pictureUrl: "./img/relojes/apple-watch-1.png",
      alt: "Smartwatch Apple watch 1",
    },
    {
      id: 4,
      title: "Smartwatch Apple watch 2",
      price: 25000,
      pictureUrl: "./img/relojes/apple-watch-2.png",
      alt: "Smartwatch Apple watch 2",
    },
    {
      id: 5,
      title: "Smartwatch Xiaomi 1",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-1.png",
      alt: "Smartwatch Xiaomi 1",
    },
    {
      id: 6,
      title: "Smartwatch Xiaomi 2",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-2.png",
      alt: "Smartwatch Xiaomi 2",
    },
    {
      id: 7,
      title: "Smartwatch Xiaomi 3",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-3.png",
      alt: "Smartwatch Xiaomi 3",
    },
    {
      id: 8,
      title: "Smartwatch Xiaomi 4",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-4.png",
      alt: "Smartwatch Xiaomi 4",
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
  const [watchesToShow, setWatchesToShow] = useState([]);

  // Hook useEffect (cada vez que se ejecuta este componente)
  useEffect(() => {
    promiseItem().then((smartwatches) => {
      setWatchesToShow(smartwatches);
    });
  }, []);

  return (
    <div className="main">
      <ItemList watchesToShow={watchesToShow} />
    </div>
  );
};

export default ItemListContainer;
