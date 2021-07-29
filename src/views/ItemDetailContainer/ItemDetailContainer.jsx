import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [prodById, setProdById] = useState([]);
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
        setProdById({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error buscando items", error);
      });
  }, []);

  return (
    <div className="main">
      <ItemDetail smartwatch={prodById} />
    </div>
  );
};
