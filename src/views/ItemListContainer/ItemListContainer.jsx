import React, { useState, useEffect } from "react";
import ItemList from "./dummyComponents/ItemList";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";

export const ItemListContainer = () => {
  // Hook useState
  const [watchesToShow, setWatchesToShow] = useState([]);

  // Parámetros que recibo por url
  const { categoryId } = useParams();

  // useEffect de Firebase
  useEffect(() => {
    const itemsCollection = database.collection("products");

    // Filtrado por marcas
    const filterItems = () => {
      const filteredCollection = itemsCollection.where(
        "brand",
        "==",
        categoryId
      );

      filteredCollection.get().then((querySnapshot) => {
        const filteredItems = querySnapshot.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setWatchesToShow(filteredItems);
      });
    };

    // Listar productos
    const items = () => {
      itemsCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          alert("No hay resultados");
        }
        const items = querySnapshot.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setWatchesToShow(items);
      });
    };

    //
    categoryId === undefined ? items() : filterItems();
  }, [categoryId]);

  return (
    <div className="main">
      <ItemList watchesToShow={watchesToShow} />
    </div>
  );
};
export default ItemListContainer;
