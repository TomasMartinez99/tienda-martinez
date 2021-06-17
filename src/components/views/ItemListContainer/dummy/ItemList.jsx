import React, { useState, useEffect } from "react";
import Item from "./Item";

// Utilizo Destructuring en la línea 5
export const ItemList = ({ watchesToShow }) => {
  return (
    // Maps (Se usa para recorrer un array)
    <>
      {watchesToShow.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        // Recorrer y mostrar array con relojes
        <div className="row">
          <div className="smartwatches-container">
            {watchesToShow.map((smartwatch) => (
              <Item
                key={smartwatch.id}
                title={smartwatch.title}
                price={smartwatch.price}
                pictureUrl={smartwatch.pictureUrl}
                alt={smartwatch.alt}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
