import React, { useState, useEffect } from "react";
import Item from "./Item";

// Utilizo Destructuring en la línea 5
export const ItemDetail = ({ detailToShow }) => {
  return (
    // Maps (función similiar al condicional For)
    <>
      {detailToShow.length == 0 ? (
        <h3>Cargando ItemDetail...</h3>
      ) : (
        // Recorrer y mostrar array con relojes
        <div className="row">
          <div className="smartwatches-container">
            {detailToShow.map((smartwatch) => (
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

export default ItemDetail;
