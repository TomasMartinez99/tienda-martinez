import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Smartwatches } from "../../services/Smartwatches";
/* import { database } from "../../../firebase/firebase"; */

// Promise
const promiseItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si está todo ok se muestra el resolve
      resolve(Smartwatches);
    }, 1000);
  });
};

export const ItemDetailContainer = (props) => {
  // Hook useState
  const [itemToShow, setItemToShow] = useState([]);

  // useParams (parámetros que recibo por url)
  const { itemId } = useParams();

  // Hook useEffect
  useEffect(() => {
    promiseItem().then((Smartwatches) => {
      const idFilter = Smartwatches.filter(
        (smartwatch) => smartwatch.id == itemId
      );
      setItemToShow(idFilter[0]);
    });
  }, [itemId]);

  return (
    <div className="main">
      <ItemDetail itemToShow={itemToShow} />
    </div>
  );
};
