import React, { useState, useEffect } from "react";
import ItemList from "./dummy/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  // Array con relojes
  const smartwatches = [
    {
      id: 1,
      title: "Smartwatch Samsung 1",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-samsung-1.png",
      alt: "Smartwatch Samsung 1",
      brand: "samsung",
    },
    {
      id: 2,
      title: "Smartwatch Samsung 2",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-samsung-2.png",
      alt: "Smartwatch Samsung 2",
      brand: "samsung",
    },
    {
      id: 3,
      title: "Smartwatch Apple watch 1",
      price: 25000,
      pictureUrl: "./img/relojes/apple-watch-1.png",
      alt: "Smartwatch Apple watch 1",
      brand: "apple",
    },
    {
      id: 4,
      title: "Smartwatch Apple watch 2",
      price: 25000,
      pictureUrl: "./img/relojes/apple-watch-2.png",
      alt: "Smartwatch Apple watch 2",
      brand: "apple",
    },
    {
      id: 5,
      title: "Smartwatch Xiaomi 1",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-1.png",
      alt: "Smartwatch Xiaomi 1",
      brand: "xiaomi",
    },
    {
      id: 6,
      title: "Smartwatch Xiaomi 2",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-2.png",
      alt: "Smartwatch Xiaomi 2",
      brand: "xiaomi",
    },
    {
      id: 7,
      title: "Smartwatch Xiaomi 3",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-3.png",
      alt: "Smartwatch Xiaomi 3",
      brand: "xiaomi",
    },
    {
      id: 8,
      title: "Smartwatch Xiaomi 4",
      price: 25000,
      pictureUrl: "./img/relojes/reloj-xiaomi-4.png",
      alt: "Smartwatch Xiaomi 4",
      brand: "xiaomi",
    },
  ];

  // Promise
  const promiseItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Si está todo ok se muestra el resolve
        resolve(smartwatches);
      }, 1000);
    });
  };

  // Hook useState
  const [watchesToShow, setWatchesToShow] = useState([]);
  /* const [filter, setFilter] = useState(""); */

  // useParams (parámetros que recibo por url)
  const { categoryId } = useParams();

  const filterSmartwatches = (data) => {
    return categoryId === ""
      ? data
      : data.filter((smartwatch) => smartwatch.brand === categoryId);
  };

  // Hook useEffect (cada vez que se ejecuta este componente)
  useEffect(() => {
    promiseItem().then((smartwatches) => {
      const brandFiltered = smartwatches.filter(
        (smartwatch) => smartwatch.brand === categoryId
      );
      setWatchesToShow(brandFiltered);
    });
  }, [categoryId]);

  return (
    <div className="main">
      <ItemList watchesToShow={filterSmartwatches(watchesToShow)} />
      {/* <ItemList watchesToShow={watchesToShow} /> */}
    </div>
  );
};

export default ItemListContainer;
