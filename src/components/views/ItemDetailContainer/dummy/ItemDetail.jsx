import React, { useState, useEffect } from "react";
import Item from "./Item";

// Utilizo Destructuring en la línea 5
export const ItemDetail = (props) => {
  // Igualo mis propiedades del objeto "smartwatch1" a "props"
  const { id, title, price, pictureUrl, alt } = props;

  return (
    <>
      <div className="row">
        <div className="smartwatches-container">
          <Item
            key={id}
            title={title}
            price={price}
            pictureUrl={pictureUrl}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
