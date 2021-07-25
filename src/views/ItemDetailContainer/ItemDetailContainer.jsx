import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  // Hook useState
  const [itemToShow, setItemToShow] = useState([]);

  // useParams (parámetros que recibo por url)
  const { itemId } = useParams();

  // useEffect de Firebase
  useEffect(() => {
    const itemCollection = database.collection("products");
    const item = itemCollection.doc(itemId);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          alert("No hay resultados");
          return;
        }
        setItemToShow({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error buscando items", error);
      });
  }, []);

  return (
    <div className="main">
      <ItemDetail itemToShow={itemToShow} />
    </div>
  );
};
