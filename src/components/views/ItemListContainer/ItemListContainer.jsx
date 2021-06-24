import React, { useState, useEffect } from "react";
import ItemList from "./dummyComponents/ItemList";
import { useParams } from "react-router-dom";
import { Smartwatches } from "../../services/Smartwatches";

// Promise
const promiseItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si está todo ok se muestra el resolve
      resolve(Smartwatches);
    }, 1000);
  });
};

export const ItemListContainer = (props) => {
  // Hook useState
  const [watchesToShow, setWatchesToShow] = useState([]);

  // useParams (parámetros que recibo por url)
  const { categoryId } = useParams();

  // Hook useEffect
  useEffect(() => {
    promiseItem().then((Smartwatches) => {
      const brandFiltered =
        categoryId === undefined
          ? Smartwatches
          : Smartwatches.filter(
              (smartwatch) => smartwatch.brand === categoryId
            );
      setWatchesToShow(brandFiltered);
    });
  }, [categoryId]);

  return (
    <div className="main">
      <ItemList watchesToShow={watchesToShow} />
    </div>
  );
};
export default ItemListContainer;
